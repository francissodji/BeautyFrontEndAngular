import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lengths } from 'src/app/data/models/Lengths';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-newlength',
  templateUrl: './newlength.component.html',
  styleUrls: ['./newlength.component.css']
})
export class NewlengthComponent implements OnInit {

  idCompany: any = sessionStorage.getItem("idcompany")
  newLengthForm! : FormGroup;
  newLength: Lengths = new Lengths();
  
  constructor(private _formBuilder: FormBuilder, 
              private _apicallservice: ApicallService,
              private _alertify: AlertifyService) { }

  ngOnInit(): void {
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript("./assets/js/add-new-product-image-upload.js");

    //Form
    this.newLengthForm = this._formBuilder.group({
      titleLength : new FormControl('', [Validators.required]),
      //isDefault : new FormControl(false),
      //idCompany : new FormControl(+sessionStorage.getItem("idCompany"))
    })
  }


  addNewLength(){
    if(this.newLengthForm.valid){
      this.newLength.isDefault = false;
      this.newLength.idCompany = this.idCompany;
      this._apicallservice.PostNewLength(this.newLength)
      .subscribe({
        next:(result: any)=>{
          this._alertify.success("Length added successfully.");
          this.newLengthForm.reset(); 
        },
        error:(error: any)=>{
          console.log(error);
          this._alertify.warning("Error while saving the Length.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
