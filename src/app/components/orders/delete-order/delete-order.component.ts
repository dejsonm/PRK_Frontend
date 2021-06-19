import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderStatus} from "../../../models/order/order-status";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";
import {SimpleOrderDto} from "../../../models/order/simple-order-dto";

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {
  form: FormGroup;
  statuses = OrderStatus.Statuses;

  constructor(private orderService: OrderService, private fb: FormBuilder,private router:Router,public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
      orderId: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      orderDate: [{value: '',disabled: true}, Validators.compose([Validators.required])],
      status: [{value: '',disabled: true}, Validators.compose([Validators.required])]

  });  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
      this.form.setValue(JSON.parse(state));
    } else {
      this.router.navigate(['/orders/'])
    }
  }

  getOrderData(): SimpleOrderDto {
    return this.form.value as SimpleOrderDto;
  }

  delete() {
this.orderService.deleteOrder(this.getOrderData().orderId).subscribe(()=>this.router.navigate(['/orders']))
  }
}
