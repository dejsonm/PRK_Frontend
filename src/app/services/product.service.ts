import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ProductsDto} from "../models/product/products-dto";
import {CrudProductDto} from "../models/product/crud-product-dto";
import {ProductDto} from "../models/product/product-dto";
import {environment} from "../../environments/environment";

/** Stworzone przez Michał Deja  */

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }

  getProducts(): Observable<ProductsDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.get<ProductsDto>(` ${this.baseUrl}api/v1/products`,{headers:headers})
  }

  createProduct( crudProductDto: CrudProductDto): Observable<void>{
    let headers: HttpHeaders = new HttpHeaders()
    let body: CrudProductDto = new CrudProductDto()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);
    body.productCurrency = crudProductDto.productCurrency;
    body.productName = crudProductDto.productName;
    body.productPrice = crudProductDto.productPrice;
    body.productQuantity = crudProductDto.productQuantity;



    return this.http.post<void>(`  ${this.baseUrl}api/v1/products`,body,{headers:headers})
  }

  updateProduct(productDto: ProductDto, productId: number):Observable<void>{
    let headers: HttpHeaders = new HttpHeaders();
    let body: CrudProductDto = new CrudProductDto();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    body.productCurrency = productDto.productCurrency;
    body.productName = productDto.productName;
    body.productPrice = productDto.productPrice;
    body.productQuantity = productDto.productQuantity;

    return this.http.put<void>(`  ${this.baseUrl}api/v1/products/${productId}`,body,{headers:headers});
  }

  deleteProduct(productId: number | undefined): Observable<unknown>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete(`  ${this.baseUrl}api/v1/products/${productId}`,{headers:headers},)
  }


  private object = new Subject<any>();

  sendObject(object: ProductDto){
    this.object.next({test: object})
  }

  getObject(): Observable<any> {
    return this.object.asObservable();
  }



}
