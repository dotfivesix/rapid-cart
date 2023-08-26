import { Model, model, models } from "mongoose";
import { customFaqSchema } from "../entities/customFaq.entity";

type CustomFaqModel = Model<typeof customFaqSchema>;

export const CustomFaqs = (models.hasOwnProperty('customFaqs') ? models.customFaqs : model('customFaqs', customFaqSchema)) as CustomFaqModel;