import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductCurrencies} from "../../../models/product/product-currencies";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDto} from "../../../models/product/product-dto";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  currencies = ProductCurrencies.Currencies;
  editedProduct!: ProductDto;

  constructor(private productService: ProductService, private fb: FormBuilder,private router:Router, public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
      productId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      productCurrency: [{value: '',disabled: false}, Validators.compose([Validators.required])],
      productName: [{value: '',disabled: false}, Validators.compose([Validators.required])],
      productPrice: [{value: '',disabled: false}, Validators.compose([Validators.required])],
      productQuantity: [{value: '',disabled: false}, Validators.compose([Validators.required])]
    }); }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
      this.editedProduct = JSON.parse(state);
      this.form.setValue(this.editedProduct);
    } else {
      this.router.navigate(['/products/'])
    }
  }

  getProductDate(): ProductDto {
    console.log(this.form.value as ProductDto)
    return this.form.value as ProductDto;

  }

  edit(){
    this.productService.updateProduct(this.getProductDate(),this.editedProduct.productId).subscribe(() => this.router.navigate(['/products']));
  }

}
