import { Router } from "express";
import { AuthController } from "./auth.controller";

const authRouter = Router();

authRouter
    .post('/login', AuthController.login)
    .post('/refresh', AuthController.refreshToken)
    .get('/validate/:token', AuthController.validateToken);

export default authRouter;