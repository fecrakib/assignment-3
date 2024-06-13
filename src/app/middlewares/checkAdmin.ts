import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user; // Assuming the user object is set by the authentication middleware
  
  console.log(req.headers.authorization)

  if (!user || user.role !== 'admin') {
    // If the user is not authenticated or is not an admin, throw a "Forbidden" error
    throw new AppError(403, 'Forbidden');
  }

  // If the user is authenticated and is an admin, proceed to the next middleware
  next();
};

export default checkAdmin;
