import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { UserDeleteComponent } from './user-delete/user-delete.component';
import {UserDeleteModule} from "./user-delete/user-delete.module";



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,UserRoutingModule,AngularMaterialModule,UserDeleteModule
  ]
})
export class UserModule { }
