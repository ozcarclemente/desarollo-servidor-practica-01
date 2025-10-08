import { Router } from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../controller/restaurant.controller";
import { createReview, getReviews } from "../controller/review.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router()

// =======
// Restaurants
// =======
router.get('/', getRestaurants)
router.post('/', authMiddleware, createRestaurant)
router.get('/:id', getRestaurant)
router.put('/:id', authMiddleware, updateRestaurant)
router.delete('/:id', authMiddleware, deleteRestaurant)

// =======
// Reviews
// =======
router.post('/:id/reviews', authMiddleware, createReview)
router.get('/:id/reviews', getReviews)

export default router