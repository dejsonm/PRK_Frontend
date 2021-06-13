import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./helpers/auth-guard.service";

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./components/sites.module').then(m=>m.SitesModule),
  canActivate: [AuthGuardService],
  canActivateChild: [AuthGuardService]
},{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},{
  path:'**',
  redirectTo: ''
}];



@NgModule({
  declarations: [],
  imports: [
  [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
