import { Response, NextFunction } from 'express';
import { TokenService } from '../../utils/jwt';
import { ErrorHandler } from '../../utils/errorHandler';
import { AuthenticatedRequest } from '../../types/user.types';

export const authMiddleware = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return ErrorHandler.unAuthorized(res, 'No token provided');

    const [, token] = authHeader.split(' ');

    if (!token) return ErrorHandler.unAuthorized(res, 'Invalid token');

    try {
        const decoded = TokenService.verifyToken(token);
        req.user = decoded;
        return next();
    } catch (err) {
        return ErrorHandler.unAuthorized(res, 'Invalid token');
    }
}; 