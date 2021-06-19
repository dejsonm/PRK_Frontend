import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductOrderDto} from "../../models/order/product-order-dto";
import {CreateOrderDto} from "../../models/order/create-order-dto";
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  /** Stworzone przez Michał Deja  */

  createOrderDto: CreateOrderDto = new CreateOrderDto();
  productsInCart: ProductOrderDto[] = this.cartService.getItems();
  productsInCartWithName = this.cartService.getItemsWithName();

  constructor(private cartService: CartService, private orderService: OrderService,private router: Router) { }

  ngOnInit(): void {
  }

  makeOrder() {
   this.createOrderDto.products = this.productsInCart;
   this.cartService.clearCart();
   this.cartService.clearCartName();
   this.orderService.createOrder(this.createOrderDto).subscribe(()=> this.router.navigate(['/dashboard']))
  }
}
