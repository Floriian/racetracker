import { Request, Response } from 'express';
import argon2 from 'argon2';
import { prisma } from '../database';
import { SignUpSchema, type SignInSchema } from '@racetracker/validation';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from '../types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { env } from '../env';
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
