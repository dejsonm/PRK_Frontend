import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderStatus} from "../../../models/order/order-status";
import {SimpleOrderDto} from "../../../models/order/simple-order-dto";

@Component({
  selector: 'app-status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.scss']
})
export class StatusOrderComponent implements OnInit {

  /** Stworzone przez Michał Deja  */

  form: FormGroup;
  statuses = OrderStatus.Statuses;
  editedOrder!: SimpleOrderDto;

  constructor(private orderService: OrderService, private fb: FormBuilder, private router: Router, public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
      orderId: [{value: '', disabled: true}, Validators.compose([Validators.required])],
      orderDate: [{value: '', disabled: true}, Validators.compose([Validators.required])],
      status: [{value: '', disabled: false}, Validators.compose([Validators.required])]

    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
      this.editedOrder = JSON.parse(state)
      this.form.setValue(this.editedOrder);


    } else {
      this.router.navigate(['/orders/'])
    }
  }

  getOrderData(): SimpleOrderDto {
    return this.form.value as SimpleOrderDto;
  }

  changeStatus() {
    this.orderService.updateOrderStatus(this.editedOrder.orderId,this.getOrderData().status).subscribe(()=>this.router.navigate(['/orders']))
  }

}
