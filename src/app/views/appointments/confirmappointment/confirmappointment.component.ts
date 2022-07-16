import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Appointment } from 'src/models/Appointment';
import { Customer } from 'src/models/Customer';
import { formatDate } from '@angular/common' 
import { Style } from 'src/models/Style';
import { ExtratStyle } from 'src/models/ExtratStyle';
import { GeneralproceduresService } from 'src/app/services/generalprocedures.service';

@Component({
  selector: 'app-confirmappointment',
  templateUrl: './confirmappointment.component.html',
  styleUrls: ['./confirmappointment.component.css']
})
export class ConfirmappointmentComponent implements OnInit {

  newAppointForm!: FormGroup;
  stateofAppoint: string = '';
  actionBtn: string = 'Save';
  titleAppointment: string = 'New Appointment'
  dateOfAppointm: Date = new Date();

  //public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  //public minDate: moment.Moment;
  //public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  //public color: ThemePalette = 'primary';

  typeServs = [
  {
      "idTypeService": "F",
      "designTypeService": "Full Service",
  },
  {
      "idTypeService": "T",
      "designTypeService": "Touch up",
  }];

  defaulttypeservice: string = 'F';

  addTakeOff = [
  {
      "idTakeOff": true,
      "designTakeOff": "Yes",
  },
  {
    "idTakeOff": false,
    "designTakeOff": "No",
  }]
    
  defaultaddTakeOff: boolean = false;

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  
  styles: any;
  sizes: any;
  lengths: any;

  selectedStylePrices: Style = new Style; //to receive the selected style from DropDown
  selectedExtraPrices: ExtratStyle = new ExtratStyle();
  selectedDateTime: any;
  selectedIdStyle:  any ;//number = 0;
  selectedIdSize: any; //number = 0; // same as above
  selectedIdLength: any; //number = 0 // same as above
  selectedTakedown: boolean = false;
  selectedSevice: string = '';
  relatedBraidingCost: any;

  stCostStyle: number = 0.00;
  totalTouchUpCost: number = 0.00;
  totalExtraSizeLengthCost: number = 0.00;
  stPriceTakeOffHair: number = 0.00;
  totalCost: number = 0.00;

  calculateInConfirmAppoint: boolean = false;

  minDateTime:Date = new Date();

  retrieveDate: string = '';

  constructor(private _formBuilder: FormBuilder, private _apiCall: ApicallService, 
              private _generalProc: GeneralproceduresService,
              @Inject(MAT_DIALOG_DATA) public editData: Appointment, //connected appointment is injected for confirmation
              private _dialogRef: MatDialogRef<ConfirmappointmentComponent>) { }

  ngOnInit(): void {
    this.listeAllStyles();
    //this.initalizeDate();
    this.bandingdata();
  }

  initalizeDate(){
    var currentDate:Date = new Date();
    this.minDateTime = this._generalProc.parseDateTime(currentDate);
    this.selectedDateTime = this._generalProc.parseDateTime(currentDate)
  }

  bandingdata(){
    this.newAppointForm = this._formBuilder.group({
      DateAppoint : ['', Validators.required],
      AddTakeOffAppoint : ['', Validators.required],
      StateAppoint : [''],
      Typeservice : ['', Validators.required],
      NumberTrack : [''],
      IDBraiderAppoint : [''],
      IdBraiderOwner : [''],
      IDClientAppoint : [''],
      IDStyleAppoint : ['', Validators.required],
      IDLenghtAppoint : ['', Validators.required],
      IdSizeAppoint : ['', Validators.required]
    })


    if(this.editData != null){
      //var currentDateOfAppoint:Date = this._generalProc.dateFromDbToView(this.editData.dateAppoint);
      this.selectedDateTime = this._generalProc.dateFromDbToView(this.editData.dateAppoint)
      //this.minDateTime = currentDateOfAppoint;
      this.retrieveDate = new Date(this.editData.dateAppoint).toLocaleString()
      this.newAppointForm.controls["DateAppoint"].setValue(this.retrieveDate);
      
      console.log("SELECTED **** date = "+this.selectedDateTime);
      console.log("retrieve  **** date = "+this.retrieveDate);


      this.newAppointForm.controls["StateAppoint"].setValue("F");// N = New, F= Confirm, C= Cancel, D = Done

     // this.newAppointForm.controls

      this.newAppointForm.controls["Typeservice"].setValue(this.editData.typeservice); 
      this.onServiceSelection(this.editData.typeservice);

      this.newAppointForm.controls["AddTakeOffAppoint"].setValue(this.editData.addTakeOffAppoint);
      this.onTakedownSelection(this.editData.addTakeOffAppoint);
      
      this.newAppointForm.controls["IDClientAppoint"].setValue(this.editData.idClientAppoint);
      
      this.newAppointForm.controls["IDStyleAppoint"].setValue(this.editData.idStyleAppoint);
      this.selectedIdStyle = this.editData.idStyleAppoint;
      this.LoadInfoForTheSelectedStyle(this.editData.idStyleAppoint);

      this.newAppointForm.controls["IdSizeAppoint"].setValue(this.editData.idSizeAppoint);
      this.selectedIdSize = this.editData.idSizeAppoint;
      this.listAllLengthPerStyleAndSize(this.editData.idSizeAppoint, this.editData.idStyleAppoint);

      this.newAppointForm.controls["IDLenghtAppoint"].setValue(this.editData.idLenghtAppoint);
      this.selectedIdLength = this.editData.idLenghtAppoint;
      this.GetTheSelectedLength(this.editData.idLenghtAppoint)

      this.newAppointForm.controls["NumberTrack"].setValue(this.editData.numberTrack);
      this.newAppointForm.controls["IDBraiderAppoint"].setValue(this.editData.idBraiderAppoint);
      this.newAppointForm.controls["IdBraiderOwner"].setValue(this.editData.idBraiderOwner);

    }
  }


  onChangeTime(inputTime: any){
    
    var todayDate : any = new Date().getTime();
    var selectDate: any = new Date(inputTime).getTime();

    if (todayDate > selectDate) {
      var toDate : any = new Date()
      this.selectedDateTime = this._generalProc.parseDateTime(toDate); ;
    } 
    console.log(this.selectedDateTime);
  }

  ConfirmAppointment()
  {
    if(this.newAppointForm.valid){
      this._apiCall.ConfirmAppointment_Put(this.editData.idAppoint, this.newAppointForm.value)
      .subscribe({
        next:(result)=>{
          alert("Appointment confirmed successfully.");
          this.newAppointForm.reset(); 
          this._dialogRef.close('confirm');
        },
        error:(erro)=>{
          alert("Error while confirming the appointment.");
        }
      })
    }
    else{
      alert("Something went wrong!!! Impossible to continue.")
    }
  }



  //All Style
  listeAllStyles(){
    this._apiCall.listAllStyles_Get().subscribe({
      next:(result)=>{
        this.styles = result;
      }
    })
  }


  LoadInfoForTheSelectedStyle(theIdStyle: number){
    if(theIdStyle > 0){
      this.listAllSizesPerStyle(theIdStyle); // the result is in the variable this.selectedStylePrices
      this.getBraidingStylePrices(theIdStyle); // the result is in the variable selectedStylePrices
    }
  }


  getAppointmentCost(){

    if (this.selectedIdStyle > 0 && this.selectedIdSize > 0 && this.selectedIdLength > 0 && this.selectedSevice != '') {
      
      this._apiCall.GetBraidingCosts(this.selectedIdStyle, this.selectedIdSize, this.selectedIdLength, this.selectedSevice, this.selectedTakedown).subscribe({
        next:(result) => {
          this.relatedBraidingCost = result;
          this.stCostStyle = this.relatedBraidingCost.stCostStyle;
          this.totalTouchUpCost = this.relatedBraidingCost.totalTouchUpCost;
          this.totalExtraSizeLengthCost = this.relatedBraidingCost.totalExtraSizeLengthCost;
          this.stPriceTakeOffHair = this.relatedBraidingCost.stPriceTakeOffHair;
          this.totalCost = this.relatedBraidingCost.totalCost;
        }
      })
    }
  }

  //prices related to the style
  getBraidingStylePrices(theIdStyle: number){
    if(theIdStyle > 0){
      console.log("the selected style Id = "+theIdStyle);
      this._apiCall.GetStyleByIdStyle(theIdStyle).subscribe({
        next:(result) => { this.selectedStylePrices = result; }
      })
    }
  }

  //Sizes per Style
  listAllSizesPerStyle(theIdStyle:number){
    if(theIdStyle > 0){
      this.selectedIdStyle = theIdStyle;
      console.log("the selected style Id (this.selectedIdStyle) = "+this.selectedIdStyle);
      this._apiCall.GetSizesByIdStyle_Get(theIdStyle).subscribe({
        next:(result) => { this.sizes = result; }
      })
    }
  }

  //Lengths per Style and Size
  listAllLengthPerStyleAndSize(theIdSize: any, theIdStyle: number){
    this.selectedIdSize = theIdSize;
    console.log("the selected size value is (this.selectedIdSize) :"+this.selectedIdSize)
    if(theIdStyle > 0 && theIdSize > 0){
      this.selectedIdSize = theIdSize;
      this._apiCall.listAllLenghtsByStyleAndSize_Get(theIdStyle, theIdSize).subscribe({
        next:(result) => {this.lengths = result}
      })
    }
  }


  GetTheSelectedLength(theIdLength: any){
      this.selectedIdLength = theIdLength;
      console.log("the selected Length value is (this.selectedIdLength) :"+this.selectedIdLength)
  }

  //Get extrat price by style, size and length
  listAllExtratBraidingPrices(theIdLength: number, theIdStyle: number, theIdSize: number){
    if(theIdStyle > 0 && theIdSize > 0 &&  theIdLength > 0){

      this._apiCall.GetExtratBraidingPrices_Get(theIdStyle, theIdSize, theIdLength).subscribe({
        next:(result) => {this.selectedExtraPrices = result; console.log("The extratprices :"+this.selectedExtraPrices.costExtra)}
      })
    }
  }

  
  onTakedownSelection(theTakedown: any){
    this.selectedTakedown = theTakedown
  }

  
  onServiceSelection(theservice: any){
    this.selectedSevice = theservice;
  }
}
