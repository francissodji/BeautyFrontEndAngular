import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lengths } from 'src/app/data/models/Lengths';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-editlength',
  templateUrl: './editlength.component.html',
  styleUrls: ['./editlength.component.css']
})
export class EditlengthComponent implements OnInit {

  idCompany: any = sessionStorage.getItem("idcompany")

  editLengthForm! : FormGroup;
  selectedIdLength: any;
  lengthFound: Lengths = new Lengths();
  lengthToUpdate: Lengths = new Lengths();

  constructor(private _formBuilder: FormBuilder, 
              private _apicallservice: ApicallService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,
              private _alertify: AlertifyService
              ) { }

  ngOnInit(): void {

    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript("./assets/js/add-new-product-image-upload.js");

    this.initializeForm();
    this.editSelectedLength();

  }

  initializeForm(){
    this.editLengthForm = this._formBuilder.group({
      titleLength : new FormControl('', [Validators.required])
    })
  }

  patchControlValue(RetrievedLength: Lengths){
    this.editLengthForm = this._formBuilder.group({
      titleLength : new FormControl(RetrievedLength.titleLength, [Validators.required])

    })
  }

  editSelectedLength(){
    
    this.selectedIdLength = this._activatedroute.snapshot.paramMap.get("idlength");
    //console.log("SELECTED ID ==>"+this.selectedIdLength);
    if(+this.selectedIdLength > 0){
      this._apicallservice.GetLengthByIdLength(+this.selectedIdLength).subscribe({
        next:(result)=>{
          this.lengthFound = result;
          this.patchControlValue(this.lengthFound);
        }, 
        error:(error)=>{}
      })
    }
    

  }

  updateLength(){
    if(this.editLengthForm.valid){
      this.lengthToUpdate.titleLength = this.lengthFound.titleLength;
      this.lengthToUpdate.isDefault = false;
      this.lengthToUpdate.idCompany = this.idCompany;

      this._apicallservice.UpdateLength(+this.selectedIdLength, this.lengthToUpdate)
      .subscribe({
        next:(result: any)=>{
          this._alertify.success("Length updated successfully.");
          this._router.navigate(['/view/settings/length']);
        },
        error:(erro: any)=>{
          console.log(erro);
          this._alertify.warning("Error while saving the Length.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
