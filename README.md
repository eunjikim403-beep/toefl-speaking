# TOEFL Speaking Mock 2026

2026 TOEFL iBT Speaking 형식 연습용 웹사이트입니다.

## 로컬 실행

PowerShell에서 이 폴더로 이동한 뒤 실행합니다.

```powershell
.\start-preview.ps1
```

브라우저에서 엽니다.

```text
http://127.0.0.1:8000
```

## 현재 구성

- Listen and Repeat 6문항
- Take an Interview 1, 2, 3
- 각 Interview 세트는 질문 4개
- Interview 질문마다 45초 답변 타이머
- 문항 선택 메뉴
- 문항별 여러 번 녹음 가능: Take 1, Take 2 방식
- 녹음 다시 듣기
- 녹음별 다운로드
- 음성 파일 기반 문제 재생

## 음성 파일 구조

Listen and Repeat는 기존 파일명으로 연결되어 있습니다.

```text
Q1 -> audio/D12_1.mp3
Q2 -> audio/D12_2.mp3
Q3 -> audio/D12_3.mp3
Q4 -> audio/D12_4.mp3
Q5 -> audio/D11_5.mp3
Q6 -> audio/D11_6.mp3
```

Interview 세트는 4개 음성 파일로 구성됩니다.

```text
Take an Interview 1
audio/q7-1.wav
audio/q7-2.wav
audio/q7-3.wav
audio/q7-4.wav

Take an Interview 2
audio/q8-1.wav
audio/q8-2.wav
audio/q8-3.wav
audio/q8-4.wav

Take an Interview 3
audio/q9-1.wav
audio/q9-2.wav
audio/q9-3.wav
audio/q9-4.wav
```

## GitHub Pages

이 폴더는 GitHub Pages에 올릴 수 있는 정적 사이트입니다. 저장소 루트에 아래 파일과 폴더가 있으면 됩니다.

```text
index.html
styles.css
app.js
audio/
.nojekyll
```

`start-preview.ps1`은 로컬 미리보기용이라 GitHub Pages에서는 사용하지 않습니다.

