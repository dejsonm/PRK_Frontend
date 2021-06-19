import {AfterViewInit, Component, } from '@angular/core';
import {UserDto} from "../../models/user/user-dto";
import {UserService} from "../../services/user.service";
import {UsersDto} from "../../models/user/users-dto";
import {merge, Observable, of} from "rxjs";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {SelectionModel} from "@angular/cdk/collections";
import {Router} from "@angular/router";

/** Stworzone przez Michał Deja  */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit {


  displayedColumns: string[] = ['select','id','name','lastname','username']

  usersDatabase!: UserDatabase | null;
  data: UserDto[] = [];
  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<UserDto>(this.allowMultiSelect, this.initialSelection)
  removeUser!: UserDto;

  constructor(private userService: UserService,private router: Router) {

  }

  ngAfterViewInit(): void {
    this.usersDatabase = new UserDatabase(this.userService);

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.usersDatabase!.getUsers()
            .pipe(catchError(() => of(null)));

        }),
        map(data => {

          if (data === null) {
            return [];
          }
          console.log(data)
          console.log(this.data)

          return data.users;
        })
      ).subscribe(data => this.data = data);
  }

  removeData(){
    this.removeUser = <UserDto>this.selection.selected.pop()
    this.router.navigate(['/users/delete', {state: JSON.stringify(this.removeUser)}])
  }

}

export class UserDatabase {
  constructor(private userService: UserService) {
  }

  getUsers(): Observable<UsersDto> {
    return this.userService.getUsers();
  }

}
