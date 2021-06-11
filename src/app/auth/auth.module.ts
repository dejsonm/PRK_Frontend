import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../components/angular-material/angular-material.module";
import {LoginComponent} from "./login/login.component";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class AuthModule { }
