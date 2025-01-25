import { Router } from "express";

import { UserServices } from "./user.services";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";

import { CloudStorageService } from "../cloudinary/cloudinary.services";
import { authMiddleware } from "../auth/auth.middleware";

const userRepository = new UserRepository();
const cloudStorageService = new CloudStorageService();
const userServices = new UserServices(userRepository, cloudStorageService);
const userController = new UserController(userServices);

const userRouter = Router();

userRouter
    .get('/user/:id', authMiddleware, (req, res) => userController.getUserById(req, res))
    .get('/user/profile/:id', authMiddleware, (req, res) => userController.getUserProfile(req, res))
    .post('/user', (req, res) => userController.createUser(req, res))
    .patch('/user/profile/:id', authMiddleware, (req, res) => userController.updateUserProfile(req, res));

export default userRouter;
