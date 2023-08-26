import { Document, Model, Schema, model, models } from "mongoose";

const categorySchema = new Schema({
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
    label: {
        type: String,
        required: true,
        unique: true
    }
});

type CategoryModel = Model<typeof categorySchema>;

export const Category = (models.hasOwnProperty('categories') ? models.categories : model('Categories', categorySchema)) as CategoryModel;