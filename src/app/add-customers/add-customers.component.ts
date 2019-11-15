import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from '../_service/customer/customer.service';
import { SignupService } from '../service/signup/signup.service';




@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {

  countries: any = [];
  country_code: any;
  countryName : any;

 // tslint:disable-next-line:no-output-on-prefix
 @Output() onCustomerAdded: EventEmitter<any> = new EventEmitter<any>();
  constructor(public fb: FormBuilder , public rest: CustomerService , public signupRest : SignupService) {

   }

  customerInfo = this.fb.group({
    name : [],
    phone : [],
    website : [],
    email : [],
    address : [],
    Street : [],
    city : [],
    state: [],
    country : []
   });

  ngOnInit() {

    this.countrycode();
  }





  addCustomer() {
    const value =  {
      customerName	:	this.customerInfo.get('name').value,
      customerPhone	:  this.country_code + '' +	this.customerInfo.get('phone').value,
      website	: this.customerInfo.get('website').value,
      customerEmail	:	this.customerInfo.get('email').value,
      // tslint:disable-next-line:max-line-length
      customerAddress	: ' Street: ' + 	this.customerInfo.get('Street').value + ', City: ' +
      this.customerInfo.get('city').value + ', State: ' +
      this.customerInfo.get('state').value + ', Country: ' +
      this.customerInfo.get('country').value
                    };
    console.log(value);

    const token = localStorage.getItem('currentUser');
    console.log(token);
    this.rest.addCustomer(value  , token).subscribe(result => {
      console.log(result);
      this.onCustomerAdded.emit(result);
      if (result['status'] == 1) {
        this.customerInfo.reset();
        // this.customerInfo.markAsUntouched();
        // this.customerInfo.reset(this.customerInfo.value);
        this.country_code = '';
        alert(result['message']);

      } else {
        alert(result['message']);
      }
    });

    }

    countrycode(){
      this.signupRest.country().subscribe(result => {
        console.log(result);
        if(result['status'] == 1){

          this.countries = result['value'];
          console.log(this.countries);
          console.log(this.countries.length);

        }
      },
      err => {
        console.log(err);
      })
    }


    setCountryCode(value){

      console.log(value);
      this.countryName = value;
      const index = this.countries.findIndex( record => record.country_name === value );
      this.country_code = this.countries[index].country_code;
      console.log(this.country_code);
    }


}
