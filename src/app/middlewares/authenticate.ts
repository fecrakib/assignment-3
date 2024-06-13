import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError(401, 'Unauthorized');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;

    // Check if the token is expired
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      throw new AppError(401, 'JWT Token expired');
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    throw new AppError(401, 'Unauthorized');
  }
};

export default authenticate;
