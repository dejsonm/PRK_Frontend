import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesRoutingModule} from "./sites-routing.module";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {SitesComponent} from "./sites.component";
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    AngularMaterialModule,
  ]
})
export class SitesModule { }
