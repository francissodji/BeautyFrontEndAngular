import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-listlength',
  templateUrl: './listlength.component.html',
  styleUrls: ['./listlength.component.css']
})
export class ListlengthComponent implements OnInit {

  listLengths: any;

  constructor(private _apicallservice: ApicallService, private _router: Router) { }

  ngOnInit(): void {
    this.findListAllLengths();
  }

  findListAllLengths(){
    this._apicallservice.GetListAllLengths().subscribe({
      next:(result)=>{
        this.listLengths = result;
      }
    })
  }

}
