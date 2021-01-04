import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes; // 이 미들웨어가 코드 사이에 들어가 있어서 다음 함수로 넘어가기위해 next를 호출해야함. 이 경우에는 다음에 있는 라우터들로 넘어가게됨.
  next(); 
};