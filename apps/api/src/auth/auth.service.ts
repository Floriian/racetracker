import { SignInSchema, SignUpSchema } from '@racetracker/validation';
import { prisma } from '../database';
import { HttpException, HttpStatusCode } from '../utils';
import argon2 from 'argon2';
import { JwtPayload } from '../types';
import jwt from 'jsonwebtoken';
import { env } from '../env';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const signIn = async (
  dto: SignInSchema
): Promise<{ message: string; token: string }> => {
  const user = await prisma.user.findFirst({ where: { email: dto.email } });
  if (!user)
    throw new HttpException('Invalid crendentials', HttpStatusCode.NOT_FOUND);

  const isPasswordCorrect = await argon2.verify(user.password, dto.password);
  if (!isPasswordCorrect)
    throw new HttpException('Invalid credentials', HttpStatusCode.NOT_FOUND);

  const jwtPayload: JwtPayload = {
    sub: user.id,
    email: user.email,
  };

  const token = jwt.sign(jwtPayload, env.ACCESS_TOKEN_SECRET);
  return {
    message: 'Success',
    token,
  };
};

const signUp = async (
  dto: SignUpSchema
): Promise<{ message: string; token: string }> => {
  try {
    const hashedPassword = await argon2.hash(dto.password);

    const user = await prisma.user.create({
      data: { email: dto.email, password: hashedPassword },
    });

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
      expiresIn: '4h',
    });
    return {
      message: 'Success',
      token,
    };
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === 'P2002')
        throw new HttpException(
          'User already exists',
          HttpStatusCode.BAD_REQUEST
        );
    }
    console.log(e);
  }
};

export const authService = {
  signIn,
  signUp,
};
