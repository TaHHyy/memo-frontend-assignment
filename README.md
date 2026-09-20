# 개인 소개 페이지 및 프론트엔드·백엔드 연동

KAIST 클라우드컴퓨팅실습 개인과제입니다. 개인 소개 페이지와, 프론트엔드(React)가 백엔드(FastAPI) API를 호출해 결과를 보여주는 메모장 앱을 만들어 배포했습니다.

## 프로젝트 소개

- **개인 소개 페이지**: HTML/CSS/JavaScript로 작성한 소개 페이지입니다.
- **연동 실습 페이지(메모장)**: 메모를 입력하면 브라우저가 백엔드 API를 호출해 서버에 저장하고, 목록을 다시 받아 화면에 보여줍니다.
- 두 페이지는 서로 링크로 이동할 수 있습니다. (메모장 첫 화면 → 소개 페이지, 소개 페이지 → 메모장)

## 주요 구성

| 구분 | 내용 | 플랫폼 |
|---|---|---|
| 개인 소개 페이지 | `public/intro.html`, `intro.css`, `intro.js` | Vercel |
| 프론트엔드 | React + Vite, `src/App.jsx`가 `fetch`로 백엔드 호출 | Vercel |
| 백엔드 | FastAPI, 메모 조회·생성·삭제 API (인메모리 저장) | Render |
| 소스 코드·문서 | 프론트 / 백엔드 저장소, README.md | GitHub |

- 프론트엔드 저장소: 이 저장소 (`memo-frontend-assignment`)
- 백엔드 저장소: https://github.com/TaHHyy/memo-backend-assignment

```
브라우저 (Vercel의 React 화면)
   │  fetch (HTTP + JSON)
   ▼
FastAPI 서버 (Render)  →  메모 목록 (서버 메모리)
```

## 배포 주소

| 항목 | 주소 |
|---|---|
| GitHub 저장소 | https://github.com/TaHHyy/memo-frontend-assignment |
| Vercel 배포 페이지 | (배포 후 입력) |
| 개인 소개 페이지 | (Vercel 주소)/intro.html |
| 백엔드 Swagger UI | (배포 후 입력)/docs |

> Render 무료 플랜은 한동안 접속이 없으면 서버가 잠들어, 첫 요청에 30~60초가 걸릴 수 있습니다. 이때 인메모리로 저장한 메모는 초기화되며, 오류가 아닙니다.

## 로컬 실행 방법

```bash
npm install
npm run dev        # http://localhost:5173
```

백엔드 주소는 환경변수 `VITE_API_URL`로 지정합니다. 없으면 `http://localhost:8000`을 사용합니다.
