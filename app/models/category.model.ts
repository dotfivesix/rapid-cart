import { InferSchemaType, Model, model, models } from "mongoose";
import { categorySchema } from "../entities/category.entity";

type CategoryModel = Model<InferSchemaType<typeof categorySchema>>;
export const Categories = (models.hasOwnProperty('categories') ? models.categories : model('Categories', categorySchema)) as CategoryModel;