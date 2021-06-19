import { Injectable } from '@angular/core';
import {ProductOrderDto} from "../models/order/product-order-dto";
import {ProductOrderWithName} from "../models/order/product-order-with-name";

/** Stworzone przez Michał Deja  */

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ProductOrderDto[] = [];
  itemsWithName: ProductOrderWithName[] = [];

  constructor() { }

  addToCart(product: ProductOrderDto, productWithName: ProductOrderWithName) {
    this.items.push(product);
    this.itemsWithName.push(productWithName)
    console.log(this.items)
    console.log(this.itemsWithName)
  }

  getItems() {
    return this.items;
  }

  getItemsWithName(){
    return this.itemsWithName;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  clearCartName() {
    this.itemsWithName = [];
    return this.itemsWithName;
  }
}
