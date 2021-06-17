import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserDto} from "../../models/user/user-dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../../services/user.service";
import {UsersDto} from "../../models/user/users-dto";
import {ProductService} from "../../services/product.service";
import {merge, Observable, of} from "rxjs";
import {ProductsDto} from "../../models/product/products-dto";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {ProductDatabase} from "../products/products.component";
import {ProductDto} from "../../models/product/product-dto";
import {SelectionModel} from "@angular/cdk/collections";

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

  constructor(private userService: UserService) {

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

  }

}

export class UserDatabase {
  constructor(private userService: UserService) {
  }

  getUsers(): Observable<UsersDto> {
    return this.userService.getUsers();
  }

}
