// modules/auth/auth.routes.ts
import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginValidationSchema, signupValidationSchema } from './auth.validation';
import { login, signup } from './auth.controller';

const router = Router();

router.post('/signup', validateRequest(signupValidationSchema), signup);
router.post('/login', validateRequest(loginValidationSchema), login);

export const AuthRouters =router;
