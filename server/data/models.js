import mongoose from 'mongoose';

export const shoppingListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number },
    unit: { type: String },
    checked: { type: Boolean, default: false },
    category: { type: String },
  },

  { timestamps: true },
);
