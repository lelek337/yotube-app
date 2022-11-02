import { Injectable } from '@angular/core';

import { Item } from 'src/app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {

  constructor() { }

  item!: Item;

  public doClick(i: Item) {
    this.item = i;
  }

  onClick() {
    return this.item;
  }
}
