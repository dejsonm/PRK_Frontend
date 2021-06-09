import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginservice:LoginService) {
    loginservice.login('test','test123').subscribe(result=> console.log(result))
  }
  title = 'PRK-frontend';
}
