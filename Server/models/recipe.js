import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [],
    required: true,
  },
});
export const Recipe = mongoose.model("Recipe", recipeSchema);
