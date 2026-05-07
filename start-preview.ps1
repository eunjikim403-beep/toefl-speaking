$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$prefix = "http://127.0.0.1:8000/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving TOEFL mock site at $prefix"

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".mp3" = "audio/mpeg"
  ".wav" = "audio/wav"
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.LocalPath.TrimStart("/")
    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = "index.html"
    }

    $path = $path -replace "/", [System.IO.Path]::DirectorySeparatorChar
    $file = Join-Path $root $path
    $resolvedRoot = [System.IO.Path]::GetFullPath($root)
    $resolvedFile = [System.IO.Path]::GetFullPath($file)

    if (-not $resolvedFile.StartsWith($resolvedRoot) -or -not (Test-Path $resolvedFile -PathType Leaf)) {
      $context.Response.StatusCode = 404
      $buffer = [System.Text.Encoding]::UTF8.GetBytes("Not found")
    } else {
      $context.Response.StatusCode = 200
      $extension = [System.IO.Path]::GetExtension($resolvedFile)
      $context.Response.ContentType = $types[$extension]
      if (-not $context.Response.ContentType) {
        $context.Response.ContentType = "application/octet-stream"
      }
      $buffer = [System.IO.File]::ReadAllBytes($resolvedFile)
    }

    $context.Response.ContentLength64 = $buffer.Length
    $context.Response.OutputStream.Write($buffer, 0, $buffer.Length)
    $context.Response.OutputStream.Close()
  }
}
finally {
  $listener.Stop()
}
