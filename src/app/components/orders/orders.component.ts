import {AfterViewInit, Component} from '@angular/core';
import {merge, Observable, of} from "rxjs";
import {OrderService} from "../../services/order.service";
import {OrdersDto} from "../../models/order/orders-dto";
import {SelectionModel} from "@angular/cdk/collections";
import {SimpleOrderDto} from "../../models/order/simple-order-dto";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {ProductDto} from "../../models/product/product-dto";
import {OrderDto} from "../../models/order/order-dto";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements AfterViewInit {

  /** Stworzone przez Michał Deja  */

  displayedColumns: string[] = ['select',  'orderId', 'orderDate','status'];
  ordersDatabase!: OrderDatabase | null;
  data: SimpleOrderDto[] = [];
  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<OrderDto>(this.allowMultiSelect, this.initialSelection)
  selectedOrder!: OrderDto;
  constructor(private _httpClient: HttpClient, private orderService: OrderService, private router: Router) { }

  ngAfterViewInit() {
    this.ordersDatabase = new OrderDatabase(this.orderService);


    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.ordersDatabase!.getOrders()
            .pipe(catchError(() => of(null)));

        }),
        map(data => {

          if (data === null) {
            return [];
          }
          console.log(data)
          console.log(this.data)

          return data.orders;
        })
      ).subscribe(data => this.data = data);

  }

  delete() {
    let deleteOrder: SimpleOrderDto = new SimpleOrderDto();
    this.selectedOrder = <OrderDto>this.selection.selected.pop()

    deleteOrder.orderId = this.selectedOrder.orderId
    deleteOrder.orderDate = this.selectedOrder.orderDate
    deleteOrder.status = this.selectedOrder.status
    this.router.navigate(['/orders/delete', {state: JSON.stringify(deleteOrder)}])
  }

  changeStatus() {
    let statusOrder: SimpleOrderDto = new SimpleOrderDto();
    this.selectedOrder = <OrderDto>this.selection.selected.pop()

    statusOrder.orderId = this.selectedOrder.orderId
    statusOrder.orderDate = this.selectedOrder.orderDate
    statusOrder.status = this.selectedOrder.status
    this.router.navigate(['/orders/status', {state: JSON.stringify(statusOrder)}])
  }
}

export class OrderDatabase {
  constructor(private orderService: OrderService) {
  }

  getOrders(): Observable<OrdersDto> {
    return this.orderService.getOrders();
  }

}
