import { InferSchemaType, Model, model, models } from "mongoose";
import { productSchema } from "../entities/product.entity";

type ProductModel = Model<InferSchemaType<typeof productSchema>>;
export const Products: ProductModel = (models.hasOwnProperty('products') ? models.products : model('products', productSchema)) as ProductModel;