import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "../products/products.component";
import {UserComponent} from "./user.component";

const routes: Routes = [{
  path: '',
  component: UserComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class UserRoutingModule {
}
