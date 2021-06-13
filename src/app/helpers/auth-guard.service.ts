import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{

  constructor(private router: Router, private loginService: LoginService) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if (this.loginService.isUserAuthenticated()){
  return true;
}
this.router.navigate(['auth/login'], {queryParams: { returnUrl: state.url}});
return false;

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isUserAuthenticated()){
      return true;
    }
    this.router.navigate(['auth/login'], {queryParams: { returnUrl: state.url}});
    return false;


  }

}
