# Dockerized React + Express + MongoDB

## 컨테이너 구성

- React + Express : 서버 분리 시키기 너무 아깝고 리소스 소모가 클것같아서 최대한 Front+Backend를 한 컨테이너에 뭉개넣음 (See https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/). mongo-express 컨테이너도 안 띄우고 Express 에 미들웨어로 구겨넣음.
- MongoDB : 단순 컨테이너

## requirements

- 일단 도커가 당연히 필요
- launch.dev.sh, launch.prod.sh 로 개발 프로덕션 컨테이너 생성하므로 실행권한 줄것
- docker-compose.prod.yml 에 보면 실서버에 적용할 환경변수 몇개가 변수화돼있음. 같은 최상위에 .env 파일 작성만 하면 됨. 무슨 값 넣으면 될지는 docker-compose.dev.yml 보고 파악하면 됨
