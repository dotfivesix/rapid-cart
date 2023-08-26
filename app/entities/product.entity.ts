import { Schema } from "mongoose";
import { faqSchema } from "./faq.entity";
import { reviewSchema } from "./review.entity";
import { customFaqSchema } from "./customFaq.entity";

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
    images: [{
        type: Blob
    }],
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
    currency: {
        type: String,
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
    reviews: {
        type: [reviewSchema],
        required: true
    },
    faqs: {
        type: [faqSchema],
        required: true
    },
    customFaqs: {
        type: [customFaqSchema],
        required: true
    }
});