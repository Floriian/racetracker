import { Request, Response } from 'express';
import argon2 from 'argon2';
import { prisma } from '../database';
import { SignUpSchema, type SignInSchema } from '@racetracker/validation';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from '../types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { env } from '../env';

export const signIn = async (
  req: Request<unknown, unknown, SignInSchema>,
  res: Response
) => {
  const { body } = req;
  const user = await prisma.user.findFirst({ where: { email: body.email } });
  if (!user) return res.status(404).json({ message: 'Invalid credentials. ' });

  const isPasswordCorrect = await argon2.verify(user.password, body.password);
  if (!isPasswordCorrect)
    return res.status(404).json({ message: 'Invalid credentials. ' });

  const payload: JwtPayload = {
    sub: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
    expiresIn: '4h',
  });

  res.json({ message: 'Success.', token });
};

export const signUp = async (
  req: Request<unknown, unknown, SignUpSchema>,
  res: Response
) => {
  const { body } = req;
  try {
    const hashedPassword = await argon2.hash(body.password);

    const user = await prisma.user.create({
      data: { email: body.email, password: hashedPassword },
    });

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
      expiresIn: '4h',
    });

    res.json({ message: 'Success.', token });
    
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === 'P2002')
        res.status(400).json({ message: 'User already exists.' });
    }
  }
};
