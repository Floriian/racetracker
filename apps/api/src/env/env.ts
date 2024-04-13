import { z } from 'zod';

export const envSchema = z.object({
  ACCESS_TOKEN_SECRET: z.string(),
  PORT: z.number().optional(),
});

const processEnv: z.infer<typeof envSchema> = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  PORT: process.env.PORT
};

export const env = envSchema.parse(processEnv);