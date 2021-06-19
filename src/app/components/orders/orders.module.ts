import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersComponent} from "./orders.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrdersRoutingModule} from "./orders-routing.module";
import {DeleteOrderModule} from "./delete-order/delete-order.module";
import {StatusOrderModule} from "./status-order/status-order.module";



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,AngularMaterialModule,OrdersRoutingModule,FormsModule,ReactiveFormsModule,DeleteOrderModule,StatusOrderModule
  ]
})
export class OrdersModule { }
