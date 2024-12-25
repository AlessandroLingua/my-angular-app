import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getItems(): string[] {
    return this.items;
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
