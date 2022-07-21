# 보드랭

## 프로젝트 히스토리

- https://yonghonara.notion.site/99162da8a41d4c72b7e85615b8742284

## 보드랭 firebase 배포

### firebase-cli 설치

```bash
$ npm install -g firebase-tools
# or
$ yarn global add firebase-tools
```

### firebase-cli 로그인

```bash
$ firebase login # 웹에서 로그인 및 권한을 허용하면 로그인이 됨.
```

### firebase hosting 배포 하기

```
# Boardrank 빌드
$ npm run build
# or
$ yarn build

$ firebase deploy
```
