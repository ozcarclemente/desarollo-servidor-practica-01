import { json, Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes"
import restaurantRoutes from "./restaurant.routes"

const router = Router();

router.use(json())
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/restaurants', restaurantRoutes)

export default router;