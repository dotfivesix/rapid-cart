import { Schema } from "mongoose";
import { faqSchema } from "./faq.entity";

export const customFaqSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true
    },
    faq: {
        type: [faqSchema],
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});