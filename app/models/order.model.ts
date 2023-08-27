import { InferSchemaType, Model, model, models } from "mongoose";
import { orderSchema } from "../entities/order.entity";

type OrderModel = Model<InferSchemaType<typeof orderSchema>>;
export const Orders = (models.hasOwnProperty('orders') ? models.orders : model('orders', orderSchema)) as OrderModel;