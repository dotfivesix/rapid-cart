import { Schema } from "mongoose";

export const reviewSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});