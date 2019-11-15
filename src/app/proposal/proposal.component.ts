import { Component, OnInit, ViewChild } from '@angular/core';
import { PropasalService } from '../_service/proposal/propasal.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProposalComponent implements OnInit {
  addProposaltemp: boolean = false;
  proposalStatus: any;
  slctedproposalStatus: any = 'select';
  proposalId: any;

  // mat Table variables
  columnsToDisplay = ['Customer', 'PackageType', 'PackageList', 'Status' , 'Date'];
  dataSource: MatTableDataSource<any>;
  expandedElement: any;
  selection = new SelectionModel<any>(true, []);

  constructor(public rest : PropasalService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getProposal();
    this.getProposalStatus();

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getProposal(){
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('currentUser');
    let data  ={
      "proposalStatus"	:	"1"
    }
    this.rest.getProposal(data , token).subscribe(result => {
       console.log(result)
       if(result['status'] == 1){
         console.log(result['value']);
         this.dataSource = new MatTableDataSource(result['value']);
         console.log(this.dataSource);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        }

      });
  }

  getProposalStatus(){
    const token = localStorage.getItem('currentUser');
    this.rest.getProposalStatus(token).subscribe(result => {
     if(result['status'] == 1){
       console.log(result);
       this.proposalStatus = result['value'];
     }
   });
  }

  changeStatus(){
   console.log(this.slctedproposalStatus);
   console.log(this.proposalId);
   let value = {
    proposalId	:	this.proposalId,
    proposalStatusId	:	this.slctedproposalStatus,
  };

   const token = localStorage.getItem('currentUser');

   this.rest.proposalStatusChange(value , token ).subscribe(result => {
    console.log(result);
    if(result['status'] == 1){
      this.slctedproposalStatus = '';
      this.getProposal();
      alert('Status Changed');
    }

     });

  }

  addProposal() {
    this.addProposaltemp = !this.addProposaltemp;


   }

   selectProposal(value){
       console.log(value);
       this.proposalId = value.proposalId;
   }
  ////////////////////////////////

  isAllSelected($event) {

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle($event) {
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }
    this.isAllSelected($event) ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

 private selectRow($event, dataSource) {
   // console.log($event.checked);
    if ($event.checked) {
      console.log(dataSource.name);
    }
  }

  onCompleteRow(dataSource) {
      dataSource.data.forEach(element => {
        console.log(element.name);
      });
  }


}
