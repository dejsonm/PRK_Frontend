import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {equalFieldsValidator} from "../../validators/equal-fields.validator";
import {SignupDto} from "../../models/login/signup-dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: this.fb.group({
        password1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
        password2: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])]
      }, {validator: equalFieldsValidator('password1', 'password2')}),
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(35)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(35)])]
    });
  }

  getRegisterData(): SignupDto {
    return this.form.value as SignupDto;
  }

  register(): void {


    this.loginService.signup(this.getRegisterData())
  }


}
