/* eslint-disable @typescript-eslint/no-empty-interface */
import { z } from "zod";
import { envSchema } from "./env"
import "express";
import type { JwtPayload } from "./types"
declare global {
    namespace NodeJS {
      interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
    namespace Express {
      interface User extends JwtPayload {}
    }
}