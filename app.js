//const express = require("express");를 최신 자바스크립트 코드로 변환하는게 밑줄의 import 코드
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware, localsMiddleware } from "./middlewares"; //알파벳순으로 임포트하는게 좋은 습관 m이 r 보다 위로
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

// const PORT = 4000;

// const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


/** middleware 넣는 법 (중간에 ip를 가져온다거나 로딩을 넣는 다거나 하는 추가 기능을 넣는 방법)
const betweenHome = (req, res, next) => {
     console.log("Between");
     next();
};

app.use(betweenHome);
**/
app.use(helmet()); // application이 더 안전하도록 해줌
app.set ('view engine', "pug");
app.use(cookieParser()); //쿠키전달받아서 사용할 수 있도록 만들어주는 미들웨어 - 사용자 인증같은 곳에서 쿠키 검사할 때 필요
app.use(bodyParser.json()); //사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 - request 정보에서 form 이나 json 형태로 된 body를 검사함
app.use(bodyParser.urlencoded({extended:true})); 
app.use(morgan("dev")); // application에서 발생하는 모든 일들을 logging해줌 
app.use(localsMiddleware); //globalRouter,userRouter 보다 위에 있어야함 밑에 있으면 둘이 locals에 접근을 못함.

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// app.listen(PORT, handleListening);

export default app;