import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ProductCurrencies} from "../../../models/product/product-currencies";
import {CrudProductDto} from "../../../models/product/crud-product-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
form: FormGroup;
  currencies = ProductCurrencies.Currencies;

  constructor(private productService: ProductService, private fb: FormBuilder,private router:Router) {
    this.form = this.fb.group({
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

  add(){
this.productService.createProduct(this.getProductDate()).subscribe(success => this.router.navigate(['/products']));
  }

}
