import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/models/Customer';
import { Style } from 'src/models/Style';


@Component({
  selector: 'app-listallappointments',
  templateUrl: './listallappointments.component.html',
  styleUrls: ['./listallappointments.component.css']
})


export class ListallappointmentsComponent implements OnInit {

  searchlistappoint!: FormGroup
  //****************************** */
displayedColumns: string[] = ['dateAppoint', 'desigStyle', 'titleSize', 'titleExtrat', 'typeservice', 'addTakeOffAppoint'];
listclientOpenAppoints!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

theFoundCustomer: Customer = new Customer();
clientCellNumToSearch: any;
theConnectedClientId: number = 0;
theStyle: Style = new Style();
libelStyle : string = '';
welcome: string = 'Welcome';
isconnected: boolean = false;




stateAppointService = [
  {
      "id": "N",
      "label": "New",
  },
  {
    "id": "F",
    "label": "Confirmed",
  },
  {
    "id": "C",
    "label": "Canceled",
  },
  {
    "id": "D",
    "libel": "Done",
  },
  {
    "id": "A",
    "label": "All",
  }];

  defaultsearchelem: string = 'N'


  constructor(private _formBuilder: FormBuilder) { }




  ngOnInit(): void {
    this.bindingdata();
  }

  bindingdata(){
    this.searchlistappoint = this._formBuilder.group({
      DateAppoint : ['', Validators.required],
    })
  }

  DiplayCustomerAppointment(){

  }

  searchAppointment(){
    
  }

}
