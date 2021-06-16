import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {merge, Observable,of} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, SortDirection} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {ProductService} from "../../services/product.service";
import {ProductsDto} from "../../models/product/products-dto";
import {ProductDto} from "../../models/product/product-dto";




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

  displayedColumns: string[] = ['productId','productCurrency',  'productName', 'productPrice','productQuantity'];
  productsDatabase!: ProductDatabase | null;
  data: ProductDto[] = [];



  constructor(private _httpClient: HttpClient, private productService: ProductService) {}

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
          }console.log(data)
          console.log(this.data)

          return data.products;
        })

      ).subscribe(data => this.data = data);

  }
}






export class ProductDatabase{
  constructor(private productService: ProductService) {
         }

         getProducts(): Observable<ProductsDto>{
    return this.productService.getProducts();
         }

}

