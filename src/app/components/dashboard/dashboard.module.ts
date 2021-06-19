import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {DashboardComponent} from "./dashboard.component";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,DashboardRoutingModule,AngularMaterialModule
  ]
})
export class DashboardModule { }
