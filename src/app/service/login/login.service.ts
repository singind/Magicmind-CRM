import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: any = "https://www.magicmindtechnologies.com/crmApi/public/api/";
  login: any = this.baseUrl + 'login';

  constructor(public http: HttpClient) { }


  userlogin(value): Observable<any> {
    console.log(value);
    return this.http.post(this.login , value);
  }
}
