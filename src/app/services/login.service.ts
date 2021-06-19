import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Subscription} from "rxjs";
import {LoginResponseDto} from "../models/login/login-response-dto";
import {SignupDto} from "../models/login/signup-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "./message.service";
import {LoginDto} from "../models/login/login-dto";
import {environment} from "../../environments/environment";

/** Stworzone przez Michał Deja  */

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {

  }

  static getToken(): string {
    return <string>localStorage.getItem('token');
  }


  login(loginDto: LoginDto): Subscription {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('X-AUTH-USERNAME', loginDto.email)
    headers = headers.set('X-AUTH-PASSWORD', loginDto.password)

    return this.http.post<LoginResponseDto>(`${this.baseUrl}api/v1/sign-in`, null, {headers: headers}).subscribe(success => {
        this.manageToken(success.token,success.admin);
        const url: string = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.router.navigate([url]);
     },
     error => {
       this.messageService.displayErrorMessage(error);
      })
  }

  signup(signup: SignupDto): Subscription {

    let headers: HttpHeaders = new HttpHeaders();
    let body: SignupDto = new SignupDto();

    body.name = signup.name;
    body.lastname = signup.lastname;

    headers = headers.set('X-AUTH-USERNAME', signup.username)
    headers = headers.set('X-AUTH-PASSWORD', signup.password?.password1)

    return this.http.post<any>(`${this.baseUrl}api/v1/sign-up`, body, {headers: headers}).subscribe(success=>{
        const url: string = this.route.snapshot.queryParams['returnUrl'] || '/auth/login';
        this.router.navigate([url]);
      },
      error => {
        this.messageService.displayErrorMessage(error);
    })

  }

  logout(): void {
    this.clearUserData();
    this.router.navigate(['/auth/login'])
  }

  private clearUserData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
  }

  isUserAuthenticated(): boolean {
    const token: string = LoginService.getToken();
    if (token == null) {
      this.clearUserData();
      return false;
    }
    return true;
  }

  private manageToken(token: string | undefined,admin: boolean): void {
    if (typeof token === "string") {
      localStorage.setItem('token', token);
      localStorage.setItem('admin', String(admin));
    }
  }

}
