import { Model, model, models } from "mongoose";
import { orderSchema } from "../entities/order.entity";

type OrderModel = Model<typeof orderSchema>;

export const Orders = (models.hasOwnProperty('orders') ? models.orders : model('orders', orderSchema)) as OrderModel;