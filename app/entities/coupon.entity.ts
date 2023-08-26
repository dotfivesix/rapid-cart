import { Schema } from "mongoose";

export const couponSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    validity: {
        type: Date,
        required: true
    }
});