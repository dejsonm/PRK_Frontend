import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductUpdateDto} from "../models/product/product-update-dto";
import {ProductsDto} from "../models/product/products-dto";

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

  createProduct( productCurrency: string, productName: string, productPrice: number, productQuantity:number): Observable<void>{
    let headers: HttpHeaders = new HttpHeaders()
    let body: ProductUpdateDto = new ProductUpdateDto()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);
    body.productCurrency = productCurrency;
    body.productName = productName;
    body.productPrice = productPrice;
    body.productQuantity = productQuantity;



    return this.http.post<void>('http://localhost:8080/api/v1/products',body,{headers:headers})
  }

  updateProduct(productId: number,currency: string,name: string,price:number,quantity:number):Observable<void>{
    let headers: HttpHeaders = new HttpHeaders();
    let body: ProductUpdateDto = new ProductUpdateDto();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    body.productCurrency = currency;
    body.productName = name;
    body.productPrice = price;
    body.productQuantity = quantity;

    return this.http.put<void>(`http://localhost:8080/api/v1/products/${productId}`,body,{headers:headers});
  }

  deleteOrder(productId: number): Observable<unknown>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete(`http://localhost:8080/api/v1/products/${productId}`,{headers:headers},)
  }



}
