import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ValidationFieldModule } from '../shared/validation-field/validation-field.module';

import { AuthGuard } from '../../guards/auth-guard.service';
import { WarehouseCheckoutGuard } from '../../guards/warehouse-checkout-guard.service';
import { WarehouseConfirmationGuard } from '../../guards/warehouse-confirmation-guard.service';

import { WarehouseComponent } from './warehouse.component';
import { WarehouseListComponent } from './warehouse_list/warehouse-list.component';
import { WarehouseCartComponent } from './warehouse_cart/warehouse-cart.component';
import { WarehouseCheckoutComponent } from './warehouse_checkout/warehouse-checkout.component';
import { WarehouseConfirmComponent } from './warehouse_confirm/warehouse-confirm.component';
import { WarehouseSuccessComponent } from './warehouse_success/warehouse-success.component';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { ValidationFieldService } from '../../services/validation-field.service';


export const routes: Routes = [
  {
    path: 'warehouse',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WarehouseListComponent }
    ]
  },
  {
    path: 'cart',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WarehouseCartComponent }
    ]
  },
  {
    path: 'checkout',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: WarehouseCheckoutComponent,
        canActivate: [WarehouseCheckoutGuard],
      },
      {
        path: 'details',
        component: WarehouseCheckoutComponent,
        canActivate: [WarehouseCheckoutGuard],
      },
      {
        path: 'confirm',
        component: WarehouseConfirmComponent,
        canActivate: [WarehouseConfirmationGuard],
      },
      { path: 'success', component: WarehouseSuccessComponent }
    ]
  }
];

@NgModule({
  declarations: [
    WarehouseComponent,
    WarehouseListComponent,
    WarehouseCartComponent,
    WarehouseCheckoutComponent,
    WarehouseConfirmComponent,
    WarehouseSuccessComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ValidationFieldModule
  ],
  providers: [
    AuthGuard,
    WarehouseCheckoutGuard,
    WarehouseConfirmationGuard,
    ProductService,
    CartService,
    OrderService,
    ValidationFieldService
  ],
  bootstrap: [WarehouseComponent]
})
export class WarehouseModule { }
