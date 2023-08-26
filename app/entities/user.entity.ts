import { Schema } from "mongoose";
import { Generate } from "../utils/generate";
import { notificationSchema } from "./notification.entity";
import { couponSchema } from "./coupon.entity";

export const userSchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true,
        default: Generate.key()
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    auth: {
        type: String,
        required: false
    },
    avatar: {
        type: Blob,
        required: false
    },
    country: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    tel: {
        type: String,
        required: false
    },
    accountStatus: {
        type: String,
        required: false,
        default: 'UNVERIFIED'
    },
    createdAt: {
        type: Date,
        required: false,
        default: new Date().toISOString()
    },
    cart: {
        type: [String],
        required: false,
        default: []
    },
    coupons: {
        type: [couponSchema],
        required: false,
        default: []
    },
    notifications: {
        type: [notificationSchema],
        required: false,
        default: []
    },
    isSeller: {
        type: Boolean,
        required: false,
        default: false
    }
});