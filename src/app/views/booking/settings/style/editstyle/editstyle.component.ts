import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Styles } from 'src/app/data/models/Styles';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-editstyle',
  templateUrl: './editstyle.component.html',
  styleUrls: ['./editstyle.component.css']
})
export class EditstyleComponent implements OnInit {

  editStyleForm! : FormGroup;
  selectedIdStyle: any;
  styleFound: Styles = new Styles();
  styleToUpdate: Styles = new Styles();
  hairIsProvided: boolean = false;

  response: { dbPath: ''; } | undefined;
  idCompany: any = localStorage.getItem("idcompany");


  constructor(private _formBuilder: FormBuilder, 
    private _apicallservice: ApicallService,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _alertify: AlertifyService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.editSelectedStyle();
  }


  initializeForm(){
    this.editStyleForm = this._formBuilder.group({
      titleStyle : new FormControl('', [Validators.required]),
      descriptStyle : new FormControl(''),
      isHairProvided : new FormControl(false),
      pictureStyle : new FormControl(''),
      idCompany : new FormControl(this.idCompany)
    })
  }

  patchControlValue(retrievedStyle: Styles){
    this.editStyleForm = this._formBuilder.group({
      titleStyle : new FormControl(retrievedStyle.titleStyle, [Validators.required]),
      descriptStyle : new FormControl(retrievedStyle.descriptStyle),
      isHairProvided : new FormControl(retrievedStyle.isHairProvided),
      pictureStyle : new FormControl(retrievedStyle.pictureStyle),
      idCompany : new FormControl(retrievedStyle.idCompany)
    })
  }

  editSelectedStyle(){
    this.selectedIdStyle = this._activatedroute.snapshot.paramMap.get("idstyle");
    
    if(+this.selectedIdStyle > 0){
      this._apicallservice.GetStyleByIdStyle(+this.selectedIdStyle).subscribe({
        next:(result: any)=>{
          this.styleFound = result;
          this.patchControlValue(this.styleFound);
        }, 
        error:()=>{}
      })
    }
  }

  updateStyle(){
    if(this.editStyleForm.valid){
      this.styleToUpdate.titleStyle = this.styleFound.titleStyle;
      this.styleToUpdate.descriptStyle = this.styleFound.descriptStyle;
      this.styleToUpdate.isHairProvided = this.hairIsProvided;
      this.styleToUpdate.pictureStyle = this.styleFound.pictureStyle;
      this.styleToUpdate.idCompany = this.idCompany;

      this._apicallservice.UpdateStyle(+this.selectedIdStyle, this.styleToUpdate)
      .subscribe({
        next:()=>{
          this._alertify.success("Style updated successfully.");
          this._router.navigate(['/view/settings/style']);
        },
        error:()=>{
          this._alertify.warning("Error while saving the Style.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

  uploadFinished(event: { dbPath: ""; }){ 
    this.response = event; 
  }

  onIsHairProvidedChanged(value:boolean){
    this.hairIsProvided = value;
  }

}
