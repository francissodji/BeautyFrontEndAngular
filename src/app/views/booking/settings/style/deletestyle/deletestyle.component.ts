import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Styles } from 'src/app/data/models/Styles';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-deletestyle',
  templateUrl: './deletestyle.component.html',
  styleUrls: ['./deletestyle.component.css']
})
export class DeletestyleComponent implements OnInit {

  styleFound: Styles = new Styles();
  selectedIdStyle: any;
  
  constructor(private _apicallservice: ApicallService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,
              private _alertify: AlertifyService) { }

  ngOnInit(): void {
    this.selectedStyle();
  }

  selectedStyle(){
    this.selectedIdStyle = this._activatedroute.snapshot.paramMap.get("idstyle");

    if(+this.selectedIdStyle > 0){
      this._apicallservice.GetStyleByIdStyle(+this.selectedIdStyle).subscribe({
        next:(result: any)=>{
          this.styleFound = result;
        }, 
        error:()=>{}
      })
    }

  }

  deleteStyle(){
    if(+this.selectedIdStyle > 0){

      this._apicallservice.DeleteStyle(+this.selectedIdStyle)
      .subscribe({
        next:(result: any)=>{
          this._alertify.success("Style deleted successfully.");
          this._router.navigate(['/view/settings/style']);
        },
        error:(erro: any)=>{
          this._alertify.warning("Error while deleting the Length.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
