import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersDto} from "../models/user/users-dto";
import {UserDto} from "../models/user/user-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.get<UsersDto>('http://localhost:8080/api/v1/users',{headers:headers})
  }

  deleteUser(userId: number): Observable<void>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete<void>(`http://localhost:8080/api/v1/users/${userId}`,{headers:headers})
  }
}
