import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";

/** Stworzone przez Michał Deja  */

const routes: Routes = [{
  path: '',
  component: UserComponent},{
  path: 'delete',
  component: UserDeleteComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class UserRoutingModule {
}
