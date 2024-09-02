import { Request, Response } from "express";
import { SignupUserInput } from "../schema/user.schema";

export const signupUserHandler = async (req: Request<{}, {}, SignupUserInput["body"]>, res: Response) => {
    res.send(req.body)
}