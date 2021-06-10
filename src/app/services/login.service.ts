import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponseDto} from "../models/login-response-dto";
import {SignupDto} from "../models/signup-dto";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) {

  }

  static getToken(): string {
    return <string>localStorage.getItem('token');
  }


  login(username: string,password: string ): Observable<LoginResponseDto>{

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('X-AUTH-USERNAME',username)
    headers = headers.set('X-AUTH-PASSWORD',password)

    return this.http.post<LoginResponseDto>('http://localhost:8080/api/v1/sign-in',null,{headers:headers})
      .pipe(tap(result => this.manageToken(result?.token)))
  }

  signup(username: string,password:string,lastname:string,name:string): Observable<void>{

    let headers: HttpHeaders = new HttpHeaders();
    let body: SignupDto = new SignupDto();

    body.name = name;
    body.lastName = lastname;

    headers = headers.set('X-AUTH-USERNAME',username)
    headers = headers.set('X-AUTH-PASSWORD',password)

    return this.http.post<void>('http://localhost:8080/api/v1/sign-up',body, {headers: headers})

  }

  logout():void {
    this.clearUserData();
  }

  private clearUserData(): void {
    localStorage.removeItem('token');
  }

  isUserAuthenticated(): boolean{
    const token: string = LoginService.getToken();
    if (token == null ){
      this.clearUserData();
      return false;
    }
    return true;
  }

  private manageToken(token: string | undefined): void {
    if (typeof token === "string") {
      localStorage.setItem('token', token);
    }
  }

}
