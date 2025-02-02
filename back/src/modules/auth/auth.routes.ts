import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authMiddleware } from "./auth.middleware";

const authRouter = Router();

authRouter
    .post('/login', AuthController.login)
    .post('/refresh', AuthController.refreshToken)
    .get('/validate', authMiddleware, AuthController.validateToken);

export default authRouter;