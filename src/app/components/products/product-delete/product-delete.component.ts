import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductCurrencies} from "../../../models/product/product-currencies";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {CrudProductDto} from "../../../models/product/crud-product-dto";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  form: FormGroup;
  currencies = ProductCurrencies.Currencies;

  constructor(private productService: ProductService, private fb: FormBuilder,private router:Router) {
    this.form = this.fb.group({
      productId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productCurrency: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productName: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productPrice: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productQuantity: [{value: '',disabled: true}, Validators.compose([Validators.required])]
    }); }

  ngOnInit(): void {
  }

  getProductDate(): CrudProductDto {
    console.log(this.form.value as CrudProductDto)
    return this.form.value as CrudProductDto;

  }

  delete(){
    this.productService.deleteProduct(this.getProductDate().productPrice).subscribe(success => this.router.navigate(['/products']));
  }

}
