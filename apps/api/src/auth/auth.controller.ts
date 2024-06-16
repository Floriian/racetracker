import { Request, Response } from 'express';
import { SignUpSchema, type SignInSchema } from '@racetracker/validation';
import { HttpException } from '../utils';
import { authService } from './auth.service';

export const signIn = async (
  req: Request<unknown, unknown, SignInSchema>,
  res: Response
) => {
  try {
    const result = await authService.signIn(req.body);
    res.json({ result });
  } catch (e) {
    if (e instanceof HttpException) {
      res.status(e.statusCode).json({ message: e.message });
    }
    console.log(e);
  }
};

export const signUp = async (
  req: Request<unknown, unknown, SignUpSchema>,
  res: Response
) => {
  try {
    const result = authService.signUp(req.body);
    res.json({ result });
  } catch (e) {
    if (e instanceof HttpException) {
      res.status(e.statusCode).json({ message: e.message });
    }
    console.log(e);
  }
};
