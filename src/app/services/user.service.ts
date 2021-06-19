import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersDto} from "../models/user/users-dto";
import {environment} from "../../environments/environment";

/** Stworzone przez Michał Deja  */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersDto>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.get<UsersDto>(`  ${this.baseUrl}api/v1/users`,{headers:headers})
  }

  deleteUser(userId: number): Observable<void>{
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('Authorization', `Bearer ${<string>localStorage.getItem('token')}`);

    return this.http.delete<void>(`  ${this.baseUrl}api/v1/users/${userId}`,{headers:headers})
  }
}
