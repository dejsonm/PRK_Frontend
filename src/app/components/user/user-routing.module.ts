import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "../products/products.component";
import {UserComponent} from "./user.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";

const routes: Routes = [{
  path: '',
  component: UserComponent},{
  path: 'delete',
  component: UserDeleteComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class UserRoutingModule {
}
