import { Request, Response } from "express";

export const signupUserHandler = (req: Request, res: Response) => {
    res.send(req.body)
}