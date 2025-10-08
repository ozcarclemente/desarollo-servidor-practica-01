import { Request, Response, NextFunction } from "express"


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    //aqui va la logica para validar el token
    console.log('Auth Middleware')
    next()//si todo esta bien, continua al siguiente middleware o controlador
}