import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: any = "https://www.magicmindtechnologies.com/crmApi/public/api/";
  loginUrl: any = this.baseUrl + 'login';

  constructor(private http: HttpClient ,     private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


//https://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example#auth-guard-ts

// baseUrl: any = "https://www.magicmindtechnologies.com/crmApi/public/api/";
// login: any = this.baseUrl + 'login';

// constructor(public http: HttpClient) { }


// userlogin(value): Observable<any> {
//   console.log(value);
//   return this.http.post(this.login , value);
// }

userlogin(value): Observable<any> {
    return this.http.post<any>(this.loginUrl, value);

}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}




}








// userlogin(value): Observable<any> {
//   return this.http.post<any>(this.loginUrl, value)
//       .pipe(map(user => {
//         console.log(user);
//         if ((user.status === 1) && user.auth_token) {

//           localStorage.setItem('currentUser', user.auth_token);
//           console.log(user.job_title);
//           console.log(user.job_title);

//           if (user.job_id === 1) {
//             console.log(user.job_id);

//             this.router.navigate(['/admin']);

//           } else if(user.job_id === 2) {
//             this.router.navigate(['/sales']);
//           } else if(user.job_id === 3){
//             alert(user.job_id);
//             this.router.navigate(['/development']);
//           } else {
//             alert('else');
//           }
//        }

//         return user;

//       }));
// }
