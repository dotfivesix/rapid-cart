import { Schema } from "mongoose";

export const orderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    sellerId:{
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    deliveryCharges: {
        type: Number,
        required: false,
        default: 0
    },
    createdAt: {
        type: Date,
        required: true
    },
    isDelivered: {
        type: Boolean,
        required: false
    }
});