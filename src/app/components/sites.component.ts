import { Component} from '@angular/core';
import {LoginService} from "../services/login.service";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {

  constructor(private loginService: LoginService) { }

logout(): void{
    this.loginService.logout();
}

}
