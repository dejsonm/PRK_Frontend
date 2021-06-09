import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductResponseDto} from "../models/product-response-dto";
import {OrderResponseDto} from "../models/order-response-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(token: string): Observable<ProductResponseDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', token);

    return this.http.get('http://localhost:8080/api/v1/products',{headers:headers})
  }

  createProduct(token: string): Observable<ProductResponseDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', token);

    return this.http.post('http://localhost:8080/api/v1/products',null,{headers:headers})
  }

  updateProduct(token: string,productId: number,currency: string,name: string,price:number,quantity:number):Observable<ProductResponseDto>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);

    return this.http.put<OrderResponseDto>('http://localhost:8080/api/v1/products/${productId}',null,{headers:headers});
  }

  deleteOrder(token: string,productId: number): Observable<unknown>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);

    return this.http.delete('http://localhost:8080/api/v1/products/${productId}',{headers:headers},)
  }



}
