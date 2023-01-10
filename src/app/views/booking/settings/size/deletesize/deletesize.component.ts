import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sizes } from 'src/app/data/models/Sizes';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-deletesize',
  templateUrl: './deletesize.component.html',
  styleUrls: ['./deletesize.component.css']
})
export class DeletesizeComponent implements OnInit {

  selectedIdSize: any;
  idCompany: any = JSON.parse(localStorage.getItem('idcompany') || '{}');

  sizeFound: Sizes = new Sizes();
  
  constructor(private _apicallservice: ApicallService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,
              private _alertify: AlertifyService) { }

  ngOnInit(): void {
    this.selectedSize();
  }

  selectedSize(){
    this.selectedIdSize = this._activatedroute.snapshot.paramMap.get("idsize");
    if(this.selectedIdSize > 0){
      this._apicallservice.GetSizeByIdSize(this.selectedIdSize).subscribe({
        next:(result: any)=>{
          this.sizeFound = result;
        }, 
        error:()=>{}
      })
    }
  }

  deleteSize(){
    if(this.selectedIdSize > 0){

      this._apicallservice.DeleteSize(this.selectedIdSize)
      .subscribe({
        next:()=>{
          this._alertify.success("Size deleted successfully.");
          this._router.navigate(['/view/settings/size']);
        },
        error:()=>{
          this._alertify.warning("Error while deleting the Length.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
