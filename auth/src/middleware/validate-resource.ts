import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import ErrorHandler from "../utils/error-handler";

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate the request using the schema
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const message = "Invalid email or password.";
        const customError = new ErrorHandler(message, 400);
        customError.details = error.errors;
        return next(customError);
      }

      next(new ErrorHandler("Internal server error", 500));
    }
  };
