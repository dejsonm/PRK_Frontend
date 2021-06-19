import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {CartRoutingModule} from "./cart-routing.module";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,AngularMaterialModule,CartRoutingModule
  ]
})
export class CartModule { }
