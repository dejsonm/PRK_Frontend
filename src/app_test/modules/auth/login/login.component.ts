import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appConfig } from '../../../app.config';

import { AuthService } from '../../../services/auth.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public authService: AuthService
  ) {}


  ngOnInit(): void {

    // reset login status
    this.authService.logout();

    this.loginForm = this.fb.group({
      'username': new FormControl(null, []),
      'password': new FormControl(null, []),
    });

  }

  login(data){

    if( appConfig.username == data.username && appConfig.password == data.password ){

      this.authService.login(data.username,data.password)
        .subscribe(
          data => {
            this.router.navigate(['/warehouse']);
          });


    }
    else{

      swal("Logowanie nie powiodło się", "Sprawdź czy login i hasło jest poprawne", "error");

    }


  }


}
