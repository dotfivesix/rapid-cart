import { Model, model, models } from "mongoose";
import { categorySchema } from "../entities/category.entity";

type CategoryModel = Model<typeof categorySchema>;

export const Category = (models.hasOwnProperty('categories') ? models.categories : model('Categories', categorySchema)) as CategoryModel;