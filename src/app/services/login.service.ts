import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponseDto} from "../models/login-response-dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(username: string,password: string ): Observable<LoginResponseDto>{

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('X-AUTH-USERNAME',username)
    headers = headers.set('X-AUTH-PASSWORD',password)

    return this.http.post<LoginResponseDto>('http://localhost:8080/api/v1/sign-in',null,{headers:headers})
  }

  signup(username: string,password:string,lastname:string,name:string): Observable<LoginResponseDto>{

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('X-AUTH-USERNAME',username)
    headers = headers.set('X-AUTH-PASSWORD',password)

    return this.http.post<LoginResponseDto>('http://localhost:8080/api/v1/sign-up',lastname)

  }

}
