import { Strategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import { prisma } from '../database';
import { JwtPayload } from '../types';

export const strategy = new Strategy(
  async (token: string, done: (...args: any) => void) => {
    try {
      const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!verifyToken) return done(verifyToken);

      const decodedToken = jwt.decode(token) as unknown as JwtPayload;
      const user = await prisma.user.findFirst({
        where: { email: decodedToken.email },
      });
      if (!user) return done(null, false);
      delete user.password;
      return done(null, user, { scope: 'all' });
    } catch (e) {
      return done(e);
    }
  }
);
