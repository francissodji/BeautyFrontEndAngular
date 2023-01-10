import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { Customer } from 'src/app/data/models/Customer';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})

export class NewcustomerComponent implements OnInit {

  newCustomerForm! : FormGroup;
  newCustomer : Customer = new Customer();
  states: any;


  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, 
    private _apiCall: ApicallService, private _router: Router, 
    private _dialogRef: MatDialogRef<NewcustomerComponent>) { }


  ngOnInit(): void {

    this.newCustomerForm = this._formBuilder.group({
      FnameClient :   ['', Validators.required],
      MnameClient :   [''],
      LnameClient :   ['', Validators.required],
      CelClient :  ['', Validators.required],
      EmailClient :   [''],
      StreetClient :   [''],
      CountyClient :  [''],
      StateClient :   [''],
      ZipCodeClient : [''],
      PhoneClient : [''],
      DOBClient : ['01/01/1900'], //default DOB for everyone
      SexClient : [''],
      IDClient : ['']
    })

    this.listStates();
  }


  
  addCustomer(){
    console.log(this.newCustomerForm.value);
    
    if(this.newCustomerForm.valid){
    /*
      this._apiCall.addnewCustomer_Post(this.newCustomerForm.value)
      .subscribe({
        next:(res)=>{
          this.newCustomer = res;
          alert("Customer added successfully.");
          this.newCustomerForm.reset(); 
          this._dialogRef.close('save');//this allow the form to close successfully
        },
        error:(erro)=>{
          console.log(erro);
          alert("Error while saving the customer.");
        }
      })
      */
    }
    else{
      alert("Something went wrong!!! Impossible to continue.")
    }
    
  }

  //liste of States
  listStates(){
    /*
    this._apiCall.listAllStates_Get()
    .subscribe({
      next:(result) => {
        //console.log(result);
        this.states = result;
      }
    })
    */
  }
}
