import { Request, Response } from "express";

export function createReviews(req: Request, res: Response) {
    res.status(201).send({});
}

export function getReviews(req: Request, res: Response) {
    res.send([]);
}
