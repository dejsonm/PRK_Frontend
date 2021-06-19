import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddToCartComponent} from "./add-to-cart.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class AddToCartModule { }
