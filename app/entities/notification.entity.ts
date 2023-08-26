import { Schema } from "mongoose";

export const notificationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    markedAsRead: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});