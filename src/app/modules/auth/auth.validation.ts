// modules/auth/auth.validation.ts
import { z } from 'zod';

export const signupValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10),
    role: z.enum(['admin', 'user']),
    address: z.string().min(1),
  }),
});

export const loginValidationSchema = z.object({
    body: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
  });