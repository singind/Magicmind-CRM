import { Component, OnInit } from '@angular/core';
import { RouteService } from '../_commonStorage/route/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  routes: any = [
    {name : 'Add customer' , route : 'addCustomer'},
    {name : 'New Proposal' , route : 'newProposal'},
    {name : 'All proposal' , route : 'allProposal'},
    {name : 'All Calls' , route : 'calls'},
    {name : 'Ticket' , route : 'ticket'},
    {name : 'Profile' , route : 'profile'},
    {name : 'logout' , route: 'login'}
  ];
  token: any ;






  selectedItem: any;

  constructor(public nav: Router , public getRoute : RouteService) {
    this.token =  localStorage.getItem('currentUser');
    // this.routes = this.getRoute.getRoute();
    // console.log(this.routes);

      // this.nav.navigate([this.route[0].route]);
      // this.selectedItem = this.route[0];
    }

  ngOnInit() {


  }

          activeList(value) {
                 this.selectedItem = value;

                 console.log(this.selectedItem.route);

                 if (this.selectedItem.route == 'login') {
                             localStorage.removeItem('currentUser');
                             localStorage.removeItem('job_id');
                             this.token = '';
                             this.nav.navigate(['/login']);

                           }
         }
}
