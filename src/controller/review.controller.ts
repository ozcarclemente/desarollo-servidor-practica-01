import { Request, Response } from "express";
import mongoose from "mongoose";
import Review from "../models/review.model";

// Crear una reseña para un restaurante
export async function createReview(req: Request, res: Response) {

    try {

        const { restaurantId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(restaurantId)) { // Validar que sea un ID de MongoDB válido
            return res.status(400).send({ message: "ID de restaurante inválido" });
        }

        const { rating, comment, userId } = req.body;

        if (!rating || !comment || !userId) {
            return res.status(400).send({ message: "Faltan datos obligatorios" });
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) { // Validar que sea un ID de MongoDB válido
            return res.status(400).send({ message: "ID de usuario inválido" });
        }

        const review = new Review({
            userId,
            restaurantId,
            rating,
            comment
            // createdAt se agrega automáticamente
        });

        await review.save();

        res.status(201).send({
            message: `Reseña creada para el restaurante con ID ${restaurantId}`,
            review: {
                rating,
                comment
            }
        });

    } catch (error) {
        res.status(500).send({ message: "Error al crear la reseña", error });
    }
}

// Obtener todas las reseñas de un restaurante
export async function getReviews(req: Request, res: Response) {

    try {

        const { restaurantId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(restaurantId)) { // Validar que sea un ID de MongoDB válido
            return res.status(400).send({ message: "ID de restaurante inválido" });
        }

        const reviews = await Review.find({ restaurantId }).sort({ createdAt: -1 });
        res.send(reviews);

    } catch (error) {
        res.status(500).send({ message: "Error al obtener las reseñas", error });
    }

}
