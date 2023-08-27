import { InferSchemaType, Model, model, models } from "mongoose";
import { userSchema } from "../entities/user.entity";

type UserModel = Model<InferSchemaType<typeof userSchema>>;
export const Users = (models.hasOwnProperty('users') ? models.users : model('users', userSchema)) as UserModel;