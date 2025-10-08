import { json, Router } from "express";
import { login, signup } from "../controller/auth.controller";

const router = Router()

router.use(json())

router.post('/login', login)
router.post('/signup', signup)

export default router