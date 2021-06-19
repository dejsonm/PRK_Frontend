import {AfterViewInit, Component} from '@angular/core';
import {merge, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {ProductService} from "../../services/product.service";
import {ProductsDto} from "../../models/product/products-dto";
import {ProductDto} from "../../models/product/product-dto";
import {SelectionModel} from "@angular/cdk/collections";
import {Router} from "@angular/router";
import {ProductOrderWithName} from "../../models/order/product-order-with-name";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'productId', 'productCurrency', 'productName', 'productPrice', 'productQuantity'];
  productsDatabase!: ProductDatabase | null;
  data: ProductDto[] = [];
  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<ProductDto>(this.allowMultiSelect, this.initialSelection)
  selectedProduct!: ProductDto;
  checkIfAdmin: boolean = true;


  constructor(private _httpClient: HttpClient, private productService: ProductService, private router: Router) {
  }

  ngAfterViewInit() {
    this.productsDatabase = new ProductDatabase(this.productService);

    this.checkIfAdmin = this.localStorageItem();

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.productsDatabase!.getProducts()
            .pipe(catchError(() => of(null)));

        }),
        map(data => {

          if (data === null) {
            return [];
          }
          console.log(data)
          console.log(this.data)

          return data.products;
        })
      ).subscribe(data => this.data = data);

  }


  public localStorageItem(): boolean {
    if (localStorage.getItem('admin') === 'true') {
      return true
    } else {
      return false;
    }
    ;
  }

  removeData() {
    this.selectedProduct = <ProductDto>this.selection.selected.pop()
    this.router.navigate(['/products/delete', {state: JSON.stringify(this.selectedProduct)}])
  }

  addData() {
    this.router.navigate(['/products/new'])
  }

  editData() {
    this.selectedProduct = <ProductDto>this.selection.selected.pop()
    this.router.navigate(['/products/edit', {state: JSON.stringify(this.selectedProduct)}])
  }


  addToCart() {
    this.selectedProduct = <ProductDto>this.selection.selected.pop()
    console.log(this.selectedProduct)

    let sentProductToCart: ProductOrderWithName = new ProductOrderWithName();
    sentProductToCart.productName = this.selectedProduct.productName
    sentProductToCart.productId = this.selectedProduct.productId
    sentProductToCart.productQuantity = this.selectedProduct.productQuantity
    console.log(this.selectedProduct)
    console.log(sentProductToCart)
    this.router.navigate(['/products/addtocart', {state: JSON.stringify(sentProductToCart)}])
  }
}


export class ProductDatabase {
  constructor(private productService: ProductService) {
  }

  getProducts(): Observable<ProductsDto> {
    return this.productService.getProducts();
  }

}

