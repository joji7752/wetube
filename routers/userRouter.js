import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
// userRouter.get("/",(req, res) => res.send("user index"));
// userRouter.get("/edit",(req, res) => res.send("user edit"));
// userRouter.get("/password",(req, res) => res.send("user password"));