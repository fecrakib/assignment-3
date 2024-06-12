import jwt from 'jsonwebtoken';

// modules/auth/auth.services.ts
import bcrypt from 'bcrypt';

import { IUser } from './auth.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import config from '../../config';

export const signupUser = async (payload: IUser): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const user = new User({ ...payload, password: hashedPassword });
  const savedUser = await user.save();
  return savedUser.toObject();
};

export const loginUser = async (email: string, password: string): Promise<{ user: IUser; token: string }> => {
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, config.jwt.secret);
  
      return { user, token };
    } catch (error) {
      throw new Error('Login failed');
    }
  };