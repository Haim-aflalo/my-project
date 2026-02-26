import mongoose from 'mongoose';
import { shoppingListSchema } from '../models/complaints.model.js';

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

export async function removeItem(item) {
  return await ShoppingList.findOneAndDelete({ item: item });
}

export async function removeItem(id) {
  return await ShoppingList.findByIdAndDelete(id);
}
