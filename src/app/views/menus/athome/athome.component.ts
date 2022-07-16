import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { GeneralproceduresService } from 'src/app/services/generalprocedures.service';
import { Appointment } from 'src/models/Appointment';
import { Customer } from 'src/models/Customer';
import { NewappointmentComponent } from '../../appointments/newappointment/newappointment.component';
import { NewcustomerComponent } from '../../customers/newcustomer/newcustomer.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Style } from 'src/models/Style';
import { ConfirmappointmentComponent } from '../../appointments/confirmappointment/confirmappointment.component';


@Component({
  selector: 'app-athome',
  templateUrl: './athome.component.html',
  styleUrls: ['./athome.component.css']
})
export class AthomeComponent implements OnInit {

  //formSearch!: FormGroup;
  theFoundCustomer: Customer = new Customer();
  clientCellNumToSearch: any;
  clientFullName: string = ''
  theConnectedClientId: number = 0;
  theStyle: Style = new Style();
  libelStyle : string = '';
  welcome: string = 'Welcome';
  isconnected: boolean = false;

//****************************** */
  displayedColumns: string[] = ['dateAppoint', 'desigStyle', 'titleSize', 'titleExtrat', 'typeservice', 'addTakeOffAppoint'];
  listclientOpenAppoints!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
//********************************* */


  listAppoints: any;


  constructor(private _formBuilder: FormBuilder, private _router: Router, 
              private _apiCall: ApicallService, private _dialog: MatDialog) { }


  ngOnInit(): void {
    
  }


  searchClientByPhone(){

    //this.bindSearchData(); 

    if(this.clientCellNumToSearch == ''){
      this.ngOnInit()
    }else{
      this._apiCall.GetClientByCellPhone_Get(this.clientCellNumToSearch).subscribe({
        next:(result) => { this.theFoundCustomer = result;
                          this.clientFullName = this.theFoundCustomer.fnameClient+' '+this.theFoundCustomer.mnameClient+' '+this.theFoundCustomer.lnameClient
                          //console.log("result : "+JSON.stringify(this.theFoundCustomer,null,"    "));
                          this.theConnectedClientId =  this.theFoundCustomer.idClient;
                          this.getCustomerOpenAppointment();
                          this.isconnected = true;
                          this.clientCellNumToSearch.reset(); 
                          },
        
        error:() => {alert("A client with phone number "+this.clientCellNumToSearch+" does not exist.")}
      })
    }
  }

  
  //open Registration
  getCustomerOpenAppointment(){

    if (this.theConnectedClientId > 0) {
      this._apiCall.GetClientOpenAppointByIdClientAndStateAppoint(this.theConnectedClientId,'N').subscribe({
        next:(result) => {
          this.listAppoints = result;

          //this.listclientOpenAppoints = new MatTableDataSource(result);
          //this.listclientOpenAppoints.paginator = this.paginator;   
          //this.listclientOpenAppoints.sort = this.sort;   
                          },
        error:(error) => {alert("Error while loading the record. Impossible to continue.");}
      })
    } 
  }

  //myStyle: Style = new Style();
  getLibelStyle(idStyle:number): string | undefined{
    if(idStyle > 0){
      
      this._apiCall.GetStyleByIdStyle(idStyle).subscribe({
        next:(res)=>{
          this.theStyle = res;
          this.libelStyle = this.theStyle.desigStyle;
        }
      })
    } 
    return this.libelStyle;
  }

  //apply Filter

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.listclientOpenAppoints.filter = filterValue.trim().toLowerCase();

    if (this.listclientOpenAppoints.paginator) {
      this.listclientOpenAppoints.paginator.firstPage()
    }
  }


  editAppointmentDialog(appoint: any){
    //this._dialog.open(NewappointmentComponent,{
    this._dialog.open(ConfirmappointmentComponent,{
      width:'40%',
      data: appoint
    })
  }

  openNewAppointmentDialog(theFoundCustomer: any){
    this._dialog.open(NewappointmentComponent,{
      width:'40%',
      data: theFoundCustomer //transfer the found customtomer to the form
    })
  }

  openNewCustomerDialog(){
    this._dialog.open(NewcustomerComponent,{
      width:'60%'
    })
  }


}
