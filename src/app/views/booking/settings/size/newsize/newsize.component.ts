import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sizes } from 'src/app/data/models/Sizes';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-newsize',
  templateUrl: './newsize.component.html',
  styleUrls: ['./newsize.component.css']
})
export class NewsizeComponent implements OnInit {

  //selectedIdSize: any = JSON.parse(localStorage.getItem('idsize') || '{}');
  idCompany: any = JSON.parse(localStorage.getItem('idcompany') || '{}');


  newSizeForm! : FormGroup;
  newSize: Sizes = new Sizes();

  constructor(private _formBuilder: FormBuilder, 
    private _apicallservice: ApicallService, 
    private _router: Router,
    private _alertify: AlertifyService) { }

  ngOnInit(): void {
    //$.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    //$.getScript("./assets/js/add-new-product-image-upload.js");

    //Form
    this.newSizeForm = this._formBuilder.group({
      titleSize : new FormControl('', [Validators.required]),
      //isDefault : new FormControl(false),
      //idCompany : new FormControl(+sessionStorage.getItem("idCompany"))
    })
  }


  addNewSize(){
    if(this.newSizeForm.valid){
      this.newSize.isDefault = false;
      this.newSize.idCompany = +this.idCompany;

      this._apicallservice.PostNewSize(this.newSize)
      .subscribe({
        next:(res)=>{
          this._alertify.success("Size added successfully.");
          this.newSizeForm.reset(); 
        },
        error:(erro)=>{
          this._alertify.warning("Error while saving the Size.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
