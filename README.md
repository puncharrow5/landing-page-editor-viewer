# 랜딩페이지 에디터 VIEWER README

![Image](https://github.com/user-attachments/assets/68865ab7-3777-417d-b513-69054ebd23f7)

## 프로젝트 소개

- 이 프로젝트는 전 직장에서 랜딩페이지 개발을 하는 경험이 종종 있었는데, 개발할 때 더 빠르고 편리하게 작업할 수 있는 방법을 고민하다가 시작된 아이디어에서 출발했습니다.
- 랜딩페이지는 구성 요소가 대체로 비슷해 개발 난이도는 낮지만, UI나 이미지가 하나만 변경되어도 개발자가 직접 수정하고 다시 배포해야 하는 번거로움이 있었습니다.
- 그래서 기획자나 디자이너도 개발자의 도움 없이 간단한 랜딩페이지를 직접 제작하거나 수정할 수 있고, 배포 없이 실시간으로 반영되는 시스템을 만들고자 했습니다.
- 이를 위해 SDUI(Server Driven UI) 기반 구조를 도입하여, 서버에서 UI를 동적으로 제어하고 빌드 및 배포 없이도 UI를 유연하게 업데이트할 수 있도록 구현했습니다.
- 전체 구조는 랜딩페이지 에디터에서 UI를 생성/수정하고, 그 정보가 백엔드에 저장된 뒤, 랜딩페이지 뷰어에서 해당 UI 정보를 기반으로 렌더링되는 방식으로 설계했습니다.
- 실제 운영 시에는 랜딩페이지 뷰어를 도메인만 다르게 설정하여 재배포 없이 여러 개의 랜딩페이지를 운영할 수 있습니다.

<br>

## 프로젝트 구성

- <a href="https://github.com/puncharrow5/landing-page-editor-frontend" target="_blank">프론트엔드<a/> : 랜딩페이지 에디터 클라이언트
- <a href="https://github.com/puncharrow5/landing-page-editor-server" target="_blank">백엔드</a> : 인증, 데이터 저장, 이메일 전송 등 API 처리
- <a href="https://github.com/puncharrow5/landing-page-editor-viewer" target="_blank">웹뷰어</a> : 랜딩페이지 에디터의 결과물을 출력하는 클라이언트

<br>

## 기술 스택
### Frontend
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql">  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"> 

### Backend
<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">   <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"> <img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"> <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"> 

### Database
<img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white">   <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"> 

### DevOps
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">    ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)    ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Environment
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">

<br>

- NextJs
    - 개인적으로 가장 익숙한 프레임워크이기 때문에 빠르게 개발을 시작할 수 있어서 선택했습니다.
    - 이번 프로젝트는 Page Router 기반으로 개발했으며, 파일과 폴더 구조만으로 라우팅을 구성할 수 있어 전체적인 구조가 직관적이고 유지보수가 용이합니다.
    - 랜딩페이지 에디터 사이트는 실시간 상호작용이 중요한 영역이므로 CSR(Client-Side Rendering) 방식으로 구성했으며, 뷰어 사이트는 초기 UI 구성 요소(스타일, 이미지, 텍스트 등)만 받아오면 되기 때문에 SSR(Server-Side Rendering) 방식으로 구현하여 초기 로딩 속도와 SEO를 최적화했습니다.
 
- Apollo Client
    - 백엔드에서 GraphQL과 Apollo Server를 사용하기 때문에, 가장 높은 호환성과 생태계를 제공하는 Apollo Client를 GraphQL 클라이언트로 선택했습니다.
    - 또한, Codegen을 활용해 백엔드와 프론트엔드 간의 타입을 자동으로 맞출 수 있어 타입 안정성과 생산성을 높였습니다.

- Styled-Components
    - Styled-Components는 스타일에 props를 전달하여 유연하게 스타일을 변경할 수 있어, UI 수정 시 실시간으로 변경된 부분을 쉽게 확인할 수 있습니다.
    - TailwindCSS는 클래스 기반 스타일링을 사용하기 때문에, props를 받아서 스타일을 동적으로 변경할 때 처리할 수 없는 제한이 있습니다. 따라서, 상태 변화에 따라 스타일을 달리해야 하는 컴포넌트에서는 Styled-Components를 사용하여 이러한 문제를 해결했습니다.
 
- Tailwind CSS
    - Tailwind CSS는 기존의 스타일시트 작성 과정 없이 HTML 파일 내에서 바로 스타일링이 가능하여 개발 시간을 크게 단축시킬 수 있어서 사용했습니다.
    - 동적 스타일링이 필요한 경우에는 Styled-Components를 사용하여 해결하고, 고정적인 스타일링이 필요한 부분에서는 Tailwind CSS를 사용하여 효율적으로 개발할 수 있었습니다.

<br>

## 주요 기능

### [데스크탑]
- 데스크탑 환경에서의 화면 모습입니다.
- 헤더에 표시된 섹션 이름을 클릭하면 해당 섹션으로 스크롤 이동합니다.
- 에디터에서 UI를 수정하면 변경 사항이 즉시 반영됩니다.

| 데스크탑 |
|----------|
![Image](https://github.com/user-attachments/assets/8be89aaa-9db2-4df2-9100-d1fac923032a)

<br>

### [모바일]
- 모바일 환경에서의 화면입니다.
- 헤더의 버튼을 누르면 메뉴가 열리고, 항목을 터치하면 해당 섹션으로 스크롤 이동합니다.
- 에디터에서 UI를 수정하면 모바일 화면에도 변경 사항이 실시간으로 반영됩니다.

| 모바일 |
|----------|
![Image](https://github.com/user-attachments/assets/d88ec5d9-23bd-4461-8695-721954149ee2)

### [문의]
- 문의 이메일을 전송할 수 있는 기능입니다.
- 유효성 검사
    - 회원가입과 마찬가지로 프론트엔드와 백엔드에서 모두 유효성 검사를 수행합니다.
    - 타입 체크 및 정규표현식을 활용하여 입력값을 검증합니다.
- 유효성 검사를 통과하면 백엔드에서 nodemailer를 통해 이메일이 전송됩니다.

| 문의 |
|----------|
![Image](https://github.com/user-attachments/assets/c3b88dae-110b-4441-bbc3-9c416dd7b0d7)

| 수신된 문의 메일 |
|----------|
![Image](https://github.com/user-attachments/assets/8b733997-e2fc-46ad-928f-e609624899f5)

<br>

### [약관]
- 푸터의 약관 링크를 클릭하면, 에디터에서 작성한 약관 내용을 확인할 수 있습니다.
- 약관은 모달 형식으로 표시됩니다.

| 약관 |
|----------|
![Image](https://github.com/user-attachments/assets/c476f7ea-3b88-49da-b6e0-15d6e73f29e4)

<br>

## 고도화 계획
- 캐러셀, 비디오 등 다양한 유형의 섹션 추가
- 회원 목록 조회 및 권한 변경 등 회원 관리 기능 강화
- 더 직관적이고 사용자 친화적인 UI 편집 기능 제공

<br>

## 관련 프로젝트
<a href="https://github.com/puncharrow5/landing-page-editor-frontend" target="_blank">랜딩페이지 프론트엔드 리포지토리</a> 
<br/>
<a href="https://github.com/puncharrow5/landing-page-editor-server" target="_blank">랜딩페이지 백엔드 리포지토리</a>

<br>

## CONTACT
<a href="mailto:seunghyeon9696@gmail.com">![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>
<a href="https://github.com/puncharrow5" target="_blank">![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)</a>
<a href="https://geode-divan-811.notion.site/a44da1efdf5b47ea8fe12a8f85b216ad" target="_blank">![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)</a>
<a href="https://www.linkedin.com/in/oh-seunghyeon-352708307" target="_blank">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>

<br/>
