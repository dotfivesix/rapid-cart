import { Schema } from "mongoose";
import { faqSchema } from "./faq.entity";

export const productSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    sellerId: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: false
    },
    images: {
        type: [Blob],
        required: false
    },
    title: {
        type: String,
        required: true
    },
    uri : {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    stocks: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    faqs: {
        type: [faqSchema],
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});