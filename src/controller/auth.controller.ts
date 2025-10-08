import { Request, Response } from "express";

export function login(req: Request, res: Response) {
    res.send('Login')
}

export function signup(req: Request, res: Response) {
    res.send('Signup')
}