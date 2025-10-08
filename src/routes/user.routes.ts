import { Router } from "express";
import { getUsers, getUser, createUser } from "./controller";
import { authMiddleware } from "../middleware/auth";

const router = Router()

router.get('', authMiddleware, getUsers)
