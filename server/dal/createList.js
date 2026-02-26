import mongoose from 'mongoose';
import { shoppingListSchema } from '../models/complaints.model.js';

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

export async function createShoppingList(item) {
  const shoppingList = new ShoppingList(item);
  return await shoppingList.save();
}
