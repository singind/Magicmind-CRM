
import { Component, ViewChild , AfterViewInit, SimpleChanges } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  token: any;





  constructor(public nav: Router ) {

    this.token = localStorage.getItem('currentUser');
    // this.tokenChek();
    console.log(this.token);



    nav.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.token = localStorage.getItem('currentUser');
        if (event['url'] == '/login' || event['url'] ==  '/signup' ) {
          localStorage.removeItem('currentUser');

         }else if(event['url'] == '/login'){
          this.nav.navigate(['/login']);
         }
      }
    });
  }


}
