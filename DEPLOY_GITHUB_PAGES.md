# GitHub Pages 배포 준비

## 올릴 파일

GitHub 저장소 루트에 아래 파일과 폴더를 올립니다.

```text
index.html
styles.css
app.js
audio/
README.md
.nojekyll
```

선택 파일:

```text
start-preview.ps1
DEPLOY_GITHUB_PAGES.md
```

`start-preview.ps1`은 로컬 미리보기용입니다. GitHub Pages 동작에는 필요하지 않습니다.

## GitHub에서 켜는 방법

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소에 업로드합니다.
3. 저장소의 `Settings`로 이동합니다.
4. `Pages` 메뉴를 엽니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch는 `main`, folder는 `/root`를 선택합니다.
7. 저장하면 잠시 뒤 Pages 주소가 생성됩니다.

## 배포 후 주의점

- 마이크 녹음은 `https://` 주소에서 정상 작동합니다.
- 녹음한 답변은 브라우저 메모리에만 남습니다.
- 보관하려면 각 녹음의 `Download` 버튼으로 저장해야 합니다.
- 큰 음성 파일은 GitHub 파일당 100MB 제한을 넘지 않아야 합니다.

