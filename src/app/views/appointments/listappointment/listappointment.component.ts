import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from 'src/app/services/apicall.service';
import { GeneralproceduresService } from 'src/app/services/generalprocedures.service';
import { CancelappointmentComponent } from '../cancelappointment/cancelappointment.component';
import { ConfirmappointmentComponent } from '../confirmappointment/confirmappointment.component';
import { JobdoneappointmentComponent } from '../jobdoneappointment/jobdoneappointment.component';

@Component({
  selector: 'app-listappointment',
  templateUrl: './listappointment.component.html',
  styleUrls: ['./listappointment.component.css']
})
export class ListappointmentComponent implements OnInit {

  appointSearch!: FormGroup;


  searchedAppoints: any;

  stateAppoint = [
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
    "label": "Job Done",
  }];

  stateAppointSearch: string = 'N';
  dateBeginSearch: Date = new Date();
  dateEndSearch: Date = new Date();
  

  relatedBraidingCost: any;

  constructor(private _formBuilder: FormBuilder, private _apiCall: ApicallService, 
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.appointSearch = this._formBuilder.group({
      AppointStatus :   [''],
      DateBeginSearch : ['01/01/1900'], //default DOB for everyone
      DateEndSearch : ['01/01/1900'] //default DOB for everyone
    })
  }


  //datebegin: Date ;
  //dateend: string = '';

  //datebegin: string = '';
  searchAppointment(){
    //console.log("Search appoint = "+this.stateAppointSearch+" - Date Deb =  "+this.dateBeginSearch+" - Date End = "+this.dateEndSearch);
    
    //this.datebegin = this._generalProcedure.TransformDateFormat(this.dateBeginSearch);
    //this.dateend = this._generalProcedure.TransformDateFormat(this.dateEndSearch);
    this._apiCall.GetAppointByStateAppointAndDates(this.stateAppointSearch).subscribe({
      next:(result)=>{
        this.searchedAppoints = result;
      }
    })
  }


  /*
  getAppointmentCost(selectedIdStyle:number, selectedIdSize: number, selectedIdLength: number, selectedSevice: string, selectedTakedown: boolean): number{

    var totalCost: number = 0;
    if (selectedIdStyle > 0 && selectedIdSize > 0 && selectedIdLength > 0 && selectedSevice != '') {
      
      this._apiCall.GetBraidingCosts(selectedIdStyle, selectedIdSize, selectedIdLength, selectedSevice, selectedTakedown).subscribe({
        next:(result) => {
          this.relatedBraidingCost = result;
          totalCost  = this.relatedBraidingCost.totalCost;
        }
      })
    }

    return totalCost;
  }
  */
 
  //Job Done
  jobDoneAppointmentDialog(appoint: any){
    this._dialog.open(JobdoneappointmentComponent,{
      width:'40%',
      data: appoint
    })
  }

  //Appointment confirmation
  confirmAppointmentDialog(appoint: any){
    this._dialog.open(ConfirmappointmentComponent,{
      width:'40%',
      data: appoint
    })
  }


  //Cancel appointment
  cancelAppointmentDialog(appoint: any){
    this._dialog.open(CancelappointmentComponent,{
      width:'40%',
      data: appoint
    })
  }

}
