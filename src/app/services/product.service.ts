import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductsDto} from "../models/product/products-dto";
import {CrudProductDto} from "../models/product/crud-product-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<ProductsDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.get<ProductsDto>('http://localhost:8080/api/v1/products',{headers:headers})
  }

  createProduct( crudProductDto: CrudProductDto): Observable<void>{
    let headers: HttpHeaders = new HttpHeaders()
    let body: CrudProductDto = new CrudProductDto()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);
    body.productCurrency = crudProductDto.productCurrency;
    body.productName = crudProductDto.productName;
    body.productPrice = crudProductDto.productPrice;
    body.productQuantity = crudProductDto.productQuantity;



    return this.http.post<void>('http://localhost:8080/api/v1/products',body,{headers:headers})
  }

  // updateProduct(crudProductDto: CrudProductDto):Observable<void>{
  //   let headers: HttpHeaders = new HttpHeaders();
  //   let body: ProductUpdateDto = new ProductUpdateDto();
  //
  //   headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);
  //
  //   body.productCurrency = crudProductDto.productCurrency;
  //   body.productName = crudProductDto.productName;
  //   body.productPrice = crudProductDto.productPrice;
  //   body.productQuantity = crudProductDto.productQuantity;
  //
  //   return this.http.put<void>(`http://localhost:8080/api/v1/products/${productId}`,body,{headers:headers});
  // }

  deleteOrder(productId: number): Observable<unknown>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete(`http://localhost:8080/api/v1/products/${productId}`,{headers:headers},)
  }



}
