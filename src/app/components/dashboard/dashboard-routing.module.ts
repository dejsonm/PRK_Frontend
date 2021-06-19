import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

/** Stworzone przez Michał Deja  */

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
