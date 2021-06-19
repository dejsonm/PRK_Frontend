import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SitesComponent} from "./sites.component";

const routes: Routes=[{
  path: '',
  component: SitesComponent,
  children: [{
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }, {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
  },{
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
  },{
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m=>m.CartModule)
  },{
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m=>m.OrdersModule)
  }

  ,{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
