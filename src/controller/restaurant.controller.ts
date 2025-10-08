import { Request, Response } from "express";

export function createRestaurant(req: Request, res: Response) {
    res.status(201).send({});
}

export function getRestaurant(req: Request, res: Response) {
    res.send([]);
}

export function getRestaurants(req: Request, res: Response) {
    res.send([]);
}


export function updateRestaurant(req: Request, res: Response) {
    res.status(200).send({});
}

export function deleteRestaurant(req: Request, res: Response) {
    res.status(204).send({});
}