import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../_service/customer/customer.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material';
import { trigger, state, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomerComponent implements OnInit {

  columnsToDisplay: string[] = ['customerName', 'customerPhone', 'customerEmail', 'created_at'];
  dataSource : any;
  expandedElement : any;
  addCustomer : boolean = false;
  ProposalByCustomer : any;


  constructor(public rest : CustomerService) { }


ngOnInit(){
  this.getCustomer();
}


getCustomer() {
     this.rest.getCustomers(localStorage.getItem('currentUser')).subscribe(result => {
       console.log(result);
        if(result['status'] == 1){
           this.dataSource = result['value'];
        }

       });
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


getProposalByCustomer(customer){
   console.log(customer);
   let  token = localStorage.getItem('currentUser');
   console.log(token);
   let data = {customerId :  customer.customerId};
   console.log(data);
   this.rest.getProposalByCustomer(data , token).subscribe(result => {
    console.log(result);
    if(result['status'] == 1){
      this.ProposalByCustomer = result['data'];
    }
  })
}



addCustmr() {
     this.addCustomer = !this.addCustomer;
    }

}






//   customerData : any = [];
//   addCustomer : boolean = false;
//   displayedColumns: string[] = ['customerName', 'customerPhone', 'customerEmail', 'created_at'];
//   dataSource : any;

//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//   @ViewChild(MatSort, {static: true}) sort: MatSort;

//

//   ngOnInit() {
//     this.getCustomer();

//   }

//   getCustomer() {

//     this.rest.getCustomers(localStorage.getItem('currentUser')).subscribe(result => {
//       if(result['status'] == 1){
//         this.customerData = result['value'];
//         this.dataSource = new MatTableDataSource(this.customerData);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       }
//       console.log(this.customerData)})
//   }


//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }




//   addCustmr() {
//    this.addCustomer = !this.addCustomer;
//   }





// }
