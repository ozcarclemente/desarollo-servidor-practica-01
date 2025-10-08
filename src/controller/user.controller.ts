import { Request, Response } from "express"

export function getUsers(req: Request, res: Response) {
    //como hacer que el controlador sepa que usuario esta logueado
    console.log('User: ', req.user)
    res.send([])//retorna un arreglo vacio. No tenemos usuarios
    
}

export function getUser(req: Request, res: Response) {
    //como hacer que el controlador sepa que usuario esta logueado
    console.log('User: ', req.user)
    res.send([])//retorna un arreglo vacio. No tenemos usuarios
    
}

export function createUser(req: Request, res: Response) {
    //como hacer que el controlador sepa que usuario esta logueado
    console.log('User: ', req.user)
    res.send([])//retorna un arreglo vacio. No tenemos usuarios
}