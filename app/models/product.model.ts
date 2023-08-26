import { Model, model, models } from "mongoose";
import { productSchema } from "../entities/product.entity";

type ProductModel = Model<typeof productSchema>;

export const Product = (models.hasOwnProperty('products') ? models.products : model('products', productSchema)) as ProductModel;