import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdersDto} from "../models/order/orders-dto";
import {CreateOrderDto} from "../models/order/create-order-dto";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<OrdersDto> {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);


    return this.http.get<OrdersDto>('http://localhost:8080/api/v1/orders', {headers: headers});

  }

  createOrder(createOrderDto: CreateOrderDto): Observable<void> {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.post<void>('http://localhost:8080/api/v1/orders', createOrderDto, {headers: headers});

  }

  deleteOrder(orderId: number): Observable<void> {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete<void>(`http://localhost:8080/api/v1/orders/${orderId}`, {headers: headers},)
  }

  updateOrderStatus(orderId: number, status: string): Observable<void> {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.put<void>(`http://localhost:8080/api/v1/orders/${orderId}/status?status=${status}`, null, {headers: headers});
  }


}
