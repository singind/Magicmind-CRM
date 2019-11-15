import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../_commonStorage/route/route.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {



  token: any = localStorage.getItem('currentUser');


  route: any =  [];



  selectedItem: any;

  constructor(public nav: Router , public getRoute: RouteService) {


    }

  ngOnInit() {
      this.getRouteData();
    }


  getRouteData() {
    let id : any = localStorage.getItem('job_title_id');
    console.log(id);
    if(id == '2') {
      console.log(id);
      this.route =
     [  {
        'id': '1',
        "sidebar_name": "customer",
        'sidebar_route': 'viewCustomer'
      },
      {
        "id": "2",
        "sidebar_name": "Proposal",
        "sidebar_route": 'viewProposal'
      },
      {
        'id': '5',
        'sidebar_name': "Ticket",
        "sidebar_route": "ticket"
      },
      {
        "id": "6",
        "sidebar_name": "Profile",
        'sidebar_route': "profile"
      },
      {
        "id": "7",
        "sidebar_name": "logout",
        "sidebar_route": "login"
      }
    ]
  } else if(id == '4') {
    console.log(id);
    this.route =
    [
      {
        "id": "8",
        "sidebar_name": "Dashboard",
        "sidebar_route": "dashboard"
      },
      {
        "id": "9",
        "sidebar_name": "Proposal",
        "sidebar_route": "viewProposal"
      },
      {
        "id": "10",
        "sidebar_name": "customer",
        "sidebar_route": "viewCustomer"
      },
      {
        "id": "11",
        "sidebar_name": "Task",
        "sidebar_route": "task"
      },
      {
        "id": "12",
        "sidebar_name": "Lead",
        "sidebar_route": "lead"
      },
      {
        "id": "13",
        "sidebar_name": "Ticket",
        "sidebar_route": "ticket"
      },
      {
        "id": "14",
        "sidebar_name": "Profile",
        "sidebar_route": "profile"
      },
      {
        "id": "15",
        "sidebar_name": "logout",
        "sidebar_route": "login"
      }
    ]
  } else {
    alert('hello');
  }



    this.nav.navigate([this.route[0].sidebar_route]);
    this.selectedItem = this.route[0];
    this.activeList(this.route[0]);
  }

  activeList(value) {
    this.selectedItem = value;

    console.log(this.selectedItem.sidebar_route);

    if (this.selectedItem.sidebar_route == 'login') {
                localStorage.removeItem('currentUser');
                console.log(localStorage.getItem('currentUser'));
                this.nav.navigate(['/login']);
                // localStorage.removeItem('job_id');
                // this.token = '';
                // this.nav.navigate(['/login']);

              }
}

}
