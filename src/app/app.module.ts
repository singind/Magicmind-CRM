import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OnlyNumberDirective } from './_directive/only-number.directive';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketComponent } from './ticket/ticket.component';

import { NewProposalComponent } from './new-proposal/new-proposal.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AllProposalComponent } from './all-proposal/all-proposal.component';
import { DetailedProposalComponent } from './detailed-proposal/detailed-proposal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProposalComponent } from './proposal/proposal.component';
import { CustomerComponent } from './customer/customer.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material';
import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FileUploadDirective } from './_directive/fileUpload/file-upload.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    OnlyNumberDirective,
    AdminComponent,
    UserComponent,


    AddCustomersComponent,
    ProfileComponent,
    TicketComponent,
    NewProposalComponent,
    SideNavComponent,
    AllProposalComponent,
    DetailedProposalComponent,
    DashboardComponent,
    ProposalComponent,
    CustomerComponent,
    FileUploadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule ,
    MatFormFieldModule ,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CKEditorModule,

    MDBBootstrapModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
