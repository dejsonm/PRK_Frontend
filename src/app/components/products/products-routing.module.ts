import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductNewComponent} from "./product-new/product-new.component";


const routes: Routes = [{
  path: '',
  component: ProductsComponent},{

 path:'new',
component: ProductNewComponent},{
  path:':id',
  component:
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
