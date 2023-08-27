import { InferSchemaType, Model, model, models } from "mongoose";
import { reviewSchema } from "../entities/review.entity";

type ReviewModel = Model<InferSchemaType<typeof reviewSchema>>;
export const Reviews = (models.hasOwnProperty('reviews') ? models.reviews : model('reviews', reviewSchema)) as ReviewModel;