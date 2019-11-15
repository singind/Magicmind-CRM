
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

         }
      }
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.token = localStorage.getItem('currentUser');
  //   console.log(changes);

  // }


  // tokenChek(){
  //   if(!this.token){
  //     console.log(this.token);
  //     this.nav.navigate(['/login']);
  //      }
  // }




}
