import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductCurrencies} from "../../../models/product/product-currencies";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {CrudProductDto} from "../../../models/product/crud-product-dto";
import {Subscription} from "rxjs";
import {ProductDto} from "../../../models/product/product-dto";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  currencies = ProductCurrencies.Currencies;
  subscription: Subscription;
  productEdit!: ProductDto;

  constructor(private productService: ProductService, private fb: FormBuilder,private router:Router) {
    this.subscription = this.productService.getObject().subscribe(productEdit => { this.productEdit = productEdit; });
    console.log(this.productEdit)
    this.form = this.fb.group({
      productId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productCurrency: ['', Validators.compose([Validators.required])],
      productName: ['', Validators.compose([Validators.required])],
      productPrice: ['', Validators.compose([Validators.required])],
      productQuantity: ['', Validators.compose([Validators.required])]
    }); }

  ngOnInit(): void {
  }

  getProductDate(): CrudProductDto {
    console.log(this.form.value as CrudProductDto)
    return this.form.value as CrudProductDto;

  }

  edit(){
    this.productService.updateProduct(this.getProductDate(),1).subscribe(() => this.router.navigate(['/products']));
  }

}
