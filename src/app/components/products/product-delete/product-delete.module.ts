import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDeleteComponent} from "./product-delete.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [ProductDeleteComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class ProductDeleteModule { }
