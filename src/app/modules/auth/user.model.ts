// modules/auth/user.model.ts
import { Schema, model } from 'mongoose';
import { IUser } from './auth.interface';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const User = model<IUser>('User', UserSchema);
