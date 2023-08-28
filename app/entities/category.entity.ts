import { Schema } from "mongoose";
import { Generate } from "../utils/generate";

export const categorySchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 50,
        match: /^(?!-)[a-z]+(-[a-z]+)*$/
    },
    label: {
        type: String,
        required: true,
        unique: true,
        match: /^(?! )[A-z]+( +[A-z]+)*$/
    },
    createdAt: {
        type: String,
        required: false
    }
});

categorySchema.pre('save', async function (next) {
    if (!this.id) this.id = Generate.key();
    if (!this.createdAt) this.createdAt = Generate.date();
    next();
});