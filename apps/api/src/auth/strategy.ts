import { IVerifyOptions, Strategy } from 'passport-http-bearer';
import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import { prisma } from '../database';
import { JwtPayload as CustomPayload } from '../types';

export const strategy = new Strategy(
  async (token: string, done: (error: unknown, user?: unknown, options?: IVerifyOptions | string) => void) => {
    try {
      const verifyToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
      ) as unknown as JwtPayload & CustomPayload;
      if (!verifyToken) return done(verifyToken);

      const user = await prisma.user.findFirst({
        where: { email: verifyToken.email },
      });

      if (!user) return done(null, false);
      delete user.password;
      return done(null, user, { scope: 'all' });
    } catch (e) {
      if (e instanceof JsonWebTokenError) {
        return done(null, { message: 'Invalid token.' });
      }
    }
  }
);
