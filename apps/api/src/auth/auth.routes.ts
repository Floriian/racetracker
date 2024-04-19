import { Router } from 'express';
import { signIn, signUp } from './auth.controller';
import { validateBody } from '../middlewares';
import { signInSchema, signUpSchema } from '@racetracker/validation';

const router = Router();

router.post('/auth/sign-in', validateBody(signInSchema), signIn);
router.post('/auth/sign-up', validateBody(signUpSchema), signUp);

export { router as authRouter };
