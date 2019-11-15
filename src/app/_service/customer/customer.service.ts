import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AllProposalComponent } from '../../all-proposal/all-proposal.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: any = 'https://www.magicmindtechnologies.com/crmApi/public/api/';
   // tslint:disable-next-line:variable-name
  addCusromer_Api  = this.baseUrl + 'addCustomer';
     // tslint:disable-next-line:variable-name
  getCustomer_Api = this.baseUrl + 'getAllCustomerInfo';
  allProposalbyCustomer = this.baseUrl + 'getProposalByCustomer';

  constructor(private http: HttpClient) { }


  addCustomer(data , token) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);

    const newLocal = this.http.post<any>(this.addCusromer_Api, data , {headers});
    return newLocal;

  }

  getCustomers(value) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', value);
    const customers = this.http.get<any>(this.getCustomer_Api , {headers});
    return customers;
  }

  getProposalByCustomer(customerId , token){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization' , token);
    return this.http.post(this.allProposalbyCustomer , customerId , {headers});
  }





}
