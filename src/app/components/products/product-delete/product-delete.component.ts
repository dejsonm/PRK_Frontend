import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductCurrencies} from "../../../models/product/product-currencies";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudProductDto} from "../../../models/product/crud-product-dto";
import {ProductDto} from "../../../models/product/product-dto";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  form: FormGroup;
  currencies = ProductCurrencies.Currencies;

  constructor(private productService: ProductService, private fb: FormBuilder,private router:Router,public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
      productId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productCurrency: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productName: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productPrice: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productQuantity: [{value: '',disabled: true}, Validators.compose([Validators.required])]
    }); }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
     this.form.setValue(JSON.parse(state));
    } else {
     this.router.navigate(['/products/'])
    }
  }

  getProductDate(): ProductDto {
    console.log(this.form.value as ProductDto)
    return this.form.value as ProductDto;

  }


  delete(){
    this.productService.deleteProduct(this.getProductDate().productId).subscribe(success => this.router.navigate(['/products']));
  }

}
