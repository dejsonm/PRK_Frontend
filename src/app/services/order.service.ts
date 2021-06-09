import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderResponseDto} from "../models/order-response-dto";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(token: string):Observable<OrderResponseDto>{

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);


    return this.http.get<OrderResponseDto>('http://localhost:8080/api/v1/orders',{headers:headers});

  }

  createOrder(token: string, productId: number,productQuantity: number): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);

    return this.http.post<boolean>('http://localhost:8080/api/v1/orders',productId,{headers:headers});

  }

  deleteOrder(token: string,orderId: number): Observable<unknown>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);

    return this.http.delete('http://localhost:8080/api/v1/orders/${orderId}',{headers:headers},)
  }

  updateOrderStatus(token: string,orderId: number,status: string):Observable<OrderResponseDto>{
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authentication', token);

    return this.http.put<OrderResponseDto>('http://localhost:8080/api/v1/orders/${orderId}/${status}',null,{headers:headers});
  }





}
