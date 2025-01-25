import { Request } from "express";

export interface UserDTO {
    name: string;
    email: string;
    profilePicture: string;
    password: string;
}

export interface UserEntity {
    name?: string;
    email?: string;
    profilePicture?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        email: string;
        name: string;
    }
}