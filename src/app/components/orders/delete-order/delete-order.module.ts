import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeleteOrderComponent} from "./delete-order.component";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [DeleteOrderComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class DeleteOrderModule { }
