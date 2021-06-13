import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,ProductsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
