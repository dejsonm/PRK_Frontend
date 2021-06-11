import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginservice:LoginService,
  private productservice:ProductService) {
    //loginservice.login('test','test123').subscribe(result=> console.log(result))
loginservice.login('test','test123').subscribe(result => productservice.getProducts().subscribe(result => console.log(result)))




  }
  title = 'PRK-frontend';
}
