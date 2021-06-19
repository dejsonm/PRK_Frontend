import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";

/** Stworzone przez Michał Deja  */

const routes: Routes = [{
  path: '',
  component: CartComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class CartRoutingModule { }
