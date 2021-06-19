import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UserDto} from "../../../models/user/user-dto";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder,private router:Router, public activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
    id: [{value: '',disabled: true}, Validators.compose([Validators.required])],
    lastName: [{value: '',disabled: true}, Validators.compose([Validators.required])],
    name: [{value: '',disabled: true}, Validators.compose([Validators.required])],
    userName: [{value: '',disabled: true}, Validators.compose([Validators.required])]
  });}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map: any) => console.log('route content', map));
    const state: string | null = this.activatedRoute.snapshot.paramMap.get('state');
    if (state !== null && state !== undefined) {
      this.form.setValue(JSON.parse(state));
    } else {
      this.router.navigate(['/users'])
    }
  }
  getUserDate(): UserDto {
    console.log(this.form.value as UserDto)
    return this.form.value as UserDto;
  }

  delete(){
    this.userService.deleteUser(this.getUserDate().id).subscribe(success => this.router.navigate(['/users']));
  }
}
