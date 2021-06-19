import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserDeleteComponent} from "./user-delete.component";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [UserDeleteComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class UserDeleteModule { }
