import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CartService } from '../../../services/cart.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-warehouse-cart',
  templateUrl: './warehouse-cart.component.html',
  styleUrls: ['./warehouse-cart.component.css']
})
export class WarehouseCartComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
  ) {}

  cart:string[] = [];
  grandTotal:number = 0.00;
  hasItems:boolean;


  ngOnInit(): void {

    if( this.cartService.retrieveCart() ){
      this.initCart();
    }

  }

  initCart(){
    this.cart = this.cartService.retrieveCart();
    this.grandTotal = this.cartService.getTotal();
    this.hasItems = ( this.cart.length > 0 )? true : false;
  }

  updateQuantity(productId:number, quantity:number){

    if( quantity > 0 ){
      this.cart = this.cartService.updateQuantity(productId, quantity);
      this.initCart();
    }
    else{
      swal("Ilość wymagana", "Proszę podać ilość produktu", "uwaga");
      this.initCart();
    }

  }

  removeItem(bookId:number){

    this.cart = this.cartService.removeItem(bookId);
    this.initCart();

  }


}
