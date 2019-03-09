import { Injectable, OnInit } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class AService implements OnInit {
  constructor() { }

  private itemsList: Item[] = [
    new Item("IT01", "First", "First Item Desc", true),
    new Item("IT02", "Second", "Second Item Desc", true),
    new Item("IT03", "Third", "Third Item Desc", false),
  ];

  ngOnInit() {

  }

  getItems(): Item[] {
    return this.itemsList;
  }

  getItem(code: string): Item {
    const item = this.itemsList.find(
      (i) => {
        return i.Code === code;
      }
    );
    return item;
  }

  addItem(item: Item) {
    this.itemsList.push(item);
  }

  editItem(code: string, newValue: Item) {
    //this.itemsList[index] = new Item(newValue.Code, newValue.Name, newValue.Description, newValue.Active);
    const item = this.itemsList.find(
      (i) => {
        return i.Code === code;
      }
    );

    if (item) {
      item.Code = newValue.Code;
      item.Name = newValue.Name;
      item.Description = newValue.Description;
      item.Active = newValue.Active;
    }
  }

  deleteItem(index: number) {
    this.itemsList.splice(index, 1);
  }
}
