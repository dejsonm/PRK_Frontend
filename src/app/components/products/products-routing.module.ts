import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductNewComponent} from "./product-new/product-new.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";


const routes: Routes = [{
  path: '',
  component: ProductsComponent
}, {

  path: 'new',
  component: ProductNewComponent
}
  , {
    path: 'edit',
    component: ProductEditComponent
  }, {
    path: 'delete',
    component: ProductDeleteComponent
  }, {
    path: 'addtocart',
    component: AddToCartComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
