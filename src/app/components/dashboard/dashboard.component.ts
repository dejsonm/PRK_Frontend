import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  checkIfAdmin!: boolean;
  cartIsNotEmpty!:boolean;

  public localStorageItem(): boolean {
    if (localStorage.getItem('admin') === 'true') {
      return true
    } else {
      return false;
    };
  }

  public howMuchProductsCart(): boolean{
    if(this.cartService.getItems().length > 0){
      return true
    }
    return false
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartIsNotEmpty = this.howMuchProductsCart()
    this.checkIfAdmin = this.localStorageItem();
  }



}
