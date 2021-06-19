import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {ProductOrderWithName} from "../../../models/order/product-order-with-name";
import {ProductOrderDto} from "../../../models/order/product-order-dto";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  form: FormGroup;
  addToCartProduct!: ProductOrderWithName;
  constructor(private cartService: CartService, private fb: FormBuilder,private router:Router,public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
    productId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
    productName: [{value: '',disabled: true}, Validators.compose([Validators.required])],
    productQuantity: [{value: '',disabled: false}, Validators.compose([Validators.required,Validators.max(100)])]
  });  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
      this.addToCartProduct = JSON.parse(state)
      this.form.setValue(this.addToCartProduct);
    } else {
      this.router.navigate(['/products/'])
  }


  }

  getData(): ProductOrderWithName {
    return this.form.value as ProductOrderWithName;
  }

    getOrderQuantity(): ProductOrderDto {
    let addToCartProductWithoutName: ProductOrderDto = new ProductOrderDto();

      addToCartProductWithoutName.productId = this.addToCartProduct.productId;
      addToCartProductWithoutName.productQuantity = this.getData().productQuantity;
      return addToCartProductWithoutName;
    }

    getOrderQuantityWithName(): ProductOrderWithName{
    let addToCartProductWithName: ProductOrderWithName = new ProductOrderWithName();

      addToCartProductWithName.productId = this.addToCartProduct.productId;
      addToCartProductWithName.productQuantity = this.getData().productQuantity;
      addToCartProductWithName.productName = this.addToCartProduct.productName;
      return addToCartProductWithName;
    }


    addToCart(){
      this.cartService.addToCart(this.getOrderQuantity(),this.getOrderQuantityWithName());
      this.router.navigate(['/product']);
    }

}
