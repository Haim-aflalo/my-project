import mongoose from 'mongoose';
import { shoppingListSchema } from '../models/complaints.model.js';

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

export async function getShoppingList() {
  return await ShoppingList.find();
}
import mongoose from 'mongoose';
import { shoppingListSchema } from '../models/complaints.model.js';

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

export async function updateShoppingList(item, data) {
  const filter = { item: item };
  return await Character.findOneAndUpdate(filter, update);
}
