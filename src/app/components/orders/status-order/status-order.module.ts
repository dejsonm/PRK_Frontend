import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusOrderComponent} from "./status-order.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [StatusOrderComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class StatusOrderModule { }
