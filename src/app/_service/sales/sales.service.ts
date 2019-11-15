import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl: any = "https://www.magicmindtechnologies.com/crmApi/public/api/";
  salesInfo: any = this.baseUrl + 'salesCustomerInfo';




//   auth-token	:	NTJlYjdhZThkNzkzMDg1ZTBkYTAxOThmY2Y0NGI3YTllNGYxZDE3ODRmMzgyNTFmNjk2NDMyOTAzYWNjNDExMQ==
// username	:	taniya




  constructor(private http: HttpClient) { }


  packageDetails(value, token): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    headers = headers.append('Authorization', token);

    return this.http.post<any>(this.salesInfo ,  value , {headers});

  }







}
