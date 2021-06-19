import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {LoginDto} from "../../models/login/login-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  /** Stworzone przez Michał Deja  */
  form: FormGroup ;

  constructor(private fb: FormBuilder, private loginService:LoginService,private router: Router) { this.form = this.fb.group({
    email: ['',Validators.compose([Validators.required])],
    password: ['',Validators.compose([Validators.required])]
  }) }

  ngOnInit(): void {
    if(this.loginService.isUserAuthenticated()){
      this.router.navigate(['/dashboard']);
     }
  }

  getLoginData(): LoginDto{
    return this.form.value as LoginDto;
  }

  login(): void {
    this.loginService.login(this.getLoginData());
  }



}
