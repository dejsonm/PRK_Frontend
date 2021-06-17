import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductNewModule} from "./product-new/product-new.module";
import {ProductEditModule} from "./product-edit/product-edit.module";
import {ProductDeleteModule} from "./product-delete/product-delete.module";



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,ProductsRoutingModule,FormsModule,ReactiveFormsModule,ProductNewModule,ProductEditModule,ProductDeleteModule
  ]
})
export class ProductsModule { }
