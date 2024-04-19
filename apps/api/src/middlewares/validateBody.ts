import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema) => {
    const middleware = (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch(e) {
            if(e instanceof ZodError) res.status(400).json(e);
            throw e;
        }
    }
    return middleware;
}