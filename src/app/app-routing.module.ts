import { NewProposalComponent } from './new-proposal/new-proposal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AdminComponent } from './admin/admin.component';

import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketComponent } from './ticket/ticket.component';

import { AuthGuard } from './_guards/auth.guard';
import { AllProposalComponent } from './all-proposal/all-proposal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ProposalComponent } from './proposal/proposal.component';
import { CustomerComponent } from './customer/customer.component';






const routes: Routes = [
  {path: '' ,  component: AppComponent, pathMatch: 'full' },
  {path: 'login' , component : LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path: 'admin' , component: AdminComponent , canActivate: [AuthGuard] },
  {path: 'viewProposal' , component: ProposalComponent , canActivate: [AuthGuard] },
  {path: 'viewCustomer' , component : CustomerComponent , canActivate: [AuthGuard]},
  {path : 'allProposal' , component :  AllProposalComponent , canActivate: [AuthGuard] },
  {path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard] },
  {path: 'ticket' , component: TicketComponent , canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
