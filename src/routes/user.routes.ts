import { Router } from "express";
import { getUserById } from "./../controller/user.controller";
import { authMiddleware } from "./../middleware/auth.middleware";


const router = Router()

router.get('/:id', authMiddleware, getUserById)

export default router
