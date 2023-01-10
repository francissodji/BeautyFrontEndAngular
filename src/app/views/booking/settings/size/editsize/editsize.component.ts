import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sizes } from 'src/app/data/models/Sizes';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-editsize',
  templateUrl: './editsize.component.html',
  styleUrls: ['./editsize.component.css']
})
export class EditsizeComponent implements OnInit {

  selectedIdSize: any;
  idCompany: any = JSON.parse(localStorage.getItem('idcompany') || '{}');

  editSizeForm! : FormGroup;
  sizeFound: Sizes = new Sizes();
  sizeToUpdate: Sizes = new Sizes();

  constructor(private _formBuilder: FormBuilder, 
              private _apicallservice: ApicallService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,
              private _alertify: AlertifyService) { }

  ngOnInit(): void {
    //$.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    //$.getScript("./assets/js/add-new-product-image-upload.js");

    this.initializeForm();
    this.editSelectedSize();
  }

  initializeForm(){
    this.editSizeForm = this._formBuilder.group({
      titleSize : new FormControl('', [Validators.required])
    })
  }

  patchControlValue(retrievedSize: Sizes){
    this.editSizeForm = this._formBuilder.group({
      titleSize : new FormControl(retrievedSize.titleSize, [Validators.required])
    })
  }

  editSelectedSize(){
    this.selectedIdSize = this._activatedroute.snapshot.paramMap.get("idsize");
    
    if(+this.selectedIdSize > 0){
      this._apicallservice.GetSizeByIdSize(+this.selectedIdSize).subscribe({
        next:(result: any)=>{
          this.sizeFound = result;
          this.patchControlValue(this.sizeFound);
        }, 
        error:()=>{}
      })
    }

  }

  updateSize(){
    if(this.editSizeForm.valid){
      this.sizeToUpdate.titleSize = this.sizeFound.titleSize;
      this.sizeToUpdate.isDefault = false;
      this.sizeToUpdate.idCompany = this.idCompany;

      //console.log("Length company id = "+this.lengthToUpdate.idCompany);
      this._apicallservice.UpdateSize(+this.selectedIdSize, this.sizeToUpdate)
      .subscribe({
        next:(res)=>{
          this._alertify.success("Size updated successfully.");
          this._router.navigate(['/view/settings/size']);
        },
        error:(erro)=>{
          this._alertify.warning("Error while saving the size.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
