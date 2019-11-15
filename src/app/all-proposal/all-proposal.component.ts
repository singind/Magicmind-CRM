import { Component, OnInit } from '@angular/core';
import { PropasalService } from '../_service/proposal/propasal.service';


@Component({
  selector: 'app-all-proposal',
  templateUrl: './all-proposal.component.html',
  styleUrls: ['./all-proposal.component.scss']
})
export class AllProposalComponent implements OnInit {

  constructor(public rest: PropasalService) { }

  ngOnInit() {
    let token = localStorage.getItem('currentUser');
    // this.rest.getProposal(token).subscribe(result => { console.log(result);} );
  }

}
