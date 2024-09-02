import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const zodError = result.error as ZodError;
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        errors: zodError.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      });
    }

    next();
  };
