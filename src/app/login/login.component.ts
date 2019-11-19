import { FormBuilder , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_service/auth/authentication.service';
import { Router } from '@angular/router';
import { RouteService } from '../_commonStorage/route/route.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  routeNav: any = [];



constructor(public fb: FormBuilder , public rest: AuthenticationService , public nav: Router , public setroute: RouteService ) {  }

userLogin =  this.fb.group({

  user: ['', Validators.required],
  password: ['' , Validators.required],
});

  ngOnInit() {

  }



  onSubmit() {
     const today = new Date();
     const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
     const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
     const dateTime = date + ' ' + time;

     const data = {
      username : this.userLogin.value.user,
      login_time : dateTime,
      password : this.userLogin.value.password,
    };


     this.rest.userlogin(data).subscribe(user => {

      console.log(user);
      if (user.status === 1) {
          localStorage.setItem('currentUser', user.auth_token);
          console.log(localStorage.getItem('currentUser'));
          this.setroute.setRoute(user.sideManu);

          localStorage.removeItem('menu');
          this.routeNav  = user.sideManu;
         // localStorage.setItem('menu', this.routeNav);

          localStorage.removeItem('job_title_id');
          localStorage.setItem('job_title_id', user.job_title_id);
          console.log(localStorage.getItem('job_title_id'));


          const navigate = '/' + this.routeNav[0].sidebar_route;
          console.log(navigate);
          this.nav.navigate(['']);

       } else {
          alert(user.message);

   }  } );


  }


  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('job_title');

  }




}
