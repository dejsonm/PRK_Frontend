import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders.component";
import {DeleteOrderComponent} from "./delete-order/delete-order.component";
import {StatusOrderComponent} from "./status-order/status-order.component";

/** Stworzone przez Michał Deja  */

const routes: Routes = [{
  path: '',
  component: OrdersComponent}, {
  path: 'delete',
  component: DeleteOrderComponent},{
  path:'status',
  component: StatusOrderComponent
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
