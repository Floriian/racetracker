import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  //@ts-expect-error No environment variable
  log: process.env.NODE_ENV !== 'production',
});
