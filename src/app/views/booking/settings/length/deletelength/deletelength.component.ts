import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lengths } from 'src/app/data/models/Lengths';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-deletelength',
  templateUrl: './deletelength.component.html',
  styleUrls: ['./deletelength.component.css']
})
export class DeletelengthComponent implements OnInit {

  lengthFound: Lengths = new Lengths();
  selectedIdLength: any;
  
  constructor(private _apicallservice: ApicallService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,
              private _alertify: AlertifyService) { }

  ngOnInit(): void {
    this.selectedLength();
  }

  selectedLength(){
    this.selectedIdLength = this._activatedroute.snapshot.paramMap.get("idlength");

    if(+this.selectedIdLength > 0){
      this._apicallservice.GetLengthByIdLength(+this.selectedIdLength).subscribe({
        next:(result)=>{
          this.lengthFound = result;
        }, 
        error:(error)=>{}
      })
    }
  }

  deleteLength(){
    if(+this.selectedIdLength > 0){

      this._apicallservice.DeleteLength(+this.selectedIdLength)
      .subscribe({
        next:(res)=>{
          this._alertify.success("Length deleted successfully.");
          this._router.navigate(['/view/settings/length']);
        },
        error:(erro)=>{
          console.log(erro);
          this._alertify.warning("Error while deleting the Length.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

}
