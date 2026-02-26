import { createShoppingList } from '../dal/createList';

export function createShoppingListService(item) {
    if(!items.name)
  if (!items.quantity) {
    items.quantity = 1;
  }
  return createShoppingList(items);
}
