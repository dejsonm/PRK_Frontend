import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductEditComponent} from "./product-edit.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class ProductEditModule { }
