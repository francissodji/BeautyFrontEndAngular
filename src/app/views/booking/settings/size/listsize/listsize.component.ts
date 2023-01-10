import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-listsize',
  templateUrl: './listsize.component.html',
  styleUrls: ['./listsize.component.css']
})
export class ListsizeComponent implements OnInit {

  listSizes: any;

  constructor(private _apicallservice: ApicallService, private _router: Router) { }

  ngOnInit(): void {
    this.findListAllSizes();
  }

  findListAllSizes(){
    this._apicallservice.GetListAllSizes().subscribe({
      next:(result)=>{
        this.listSizes = result;
      }
    })
  }

}
