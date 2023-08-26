import { Schema } from "mongoose";

export const faqSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    answer: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});