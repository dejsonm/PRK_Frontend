import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesRoutingModule} from "./sites-routing.module";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {SitesComponent} from "./sites.component";

/** Stworzone przez Michał Deja  */

@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    AngularMaterialModule,
  ]
})
export class SitesModule { }
