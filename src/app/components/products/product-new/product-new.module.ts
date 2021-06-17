import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductNewComponent} from "./product-new.component";


@NgModule({
  declarations: [ProductNewComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class ProductNewModule {
}
