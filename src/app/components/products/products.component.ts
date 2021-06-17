import {AfterViewInit, Component} from '@angular/core';
import {merge, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {ProductService} from "../../services/product.service";
import {ProductsDto} from "../../models/product/products-dto";
import {ProductDto} from "../../models/product/product-dto";
import {SelectionModel} from "@angular/cdk/collections";
import {Router} from "@angular/router";


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
  removeProduct!: ProductDto ;
  editProduct!: ProductDto;


  constructor(private _httpClient: HttpClient, private productService: ProductService, private router: Router) {
  }

  ngAfterViewInit() {
    this.productsDatabase = new ProductDatabase(this.productService);

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


  removeData() {
   this.removeProduct = <ProductDto>this.selection.selected.pop()
    this.productService.sendObject(this.removeProduct)
    this.router.navigate(['/products/delete'])
  }

  addData() {
    this.router.navigate(['/products/new'])
  }

  editData()
   {
     this.editProduct = <ProductDto>this.selection.selected.pop()
  this.productService.sendObject(this.editProduct)
  this.router.navigate(['/products/edit'])
  }


}


export class ProductDatabase {
  constructor(private productService: ProductService) {
  }

  getProducts(): Observable<ProductsDto> {
    return this.productService.getProducts();
  }

}

