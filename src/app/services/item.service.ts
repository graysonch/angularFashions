import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { ITEMS } from '../shared/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  getFilteredItems(category: string): Item[] {
    return ITEMS.filter((item) => (item.category === category));
  }
}
