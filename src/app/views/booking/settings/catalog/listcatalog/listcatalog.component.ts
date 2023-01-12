import { Component, OnInit } from '@angular/core';
import { CatalogsCombine } from 'src/app/data/models/CatalogsCombine';
import { Lengths } from 'src/app/data/models/Lengths';
import { Sizes } from 'src/app/data/models/Sizes';
import { Styles } from 'src/app/data/models/Styles';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-listcatalog',
  templateUrl: './listcatalog.component.html',
  styleUrls: ['./listcatalog.component.css']
})
export class ListcatalogComponent implements OnInit {

  idCompany: any = localStorage.getItem("idcompany");
  styleId: number = 0;
  sizeId: number = 0;
  lengthId: number = 0;

  selectedIdStyle: number = 0;
  selectedIdSize: number = 0; // same as above
  selectedIdLength: number = 0 // same as above
  allStyles: Styles[] = [];
  allSizes: Sizes[] = [];
  allLengths: Lengths[] = [];

  listCatalogImages: CatalogsCombine[] = [];

  constructor(private _apicallservice: ApicallService) { }

  ngOnInit(): void {
    this.findListAllCatalogImages();
  }

  findListAllStyles(){
    this._apicallservice.GetListAllStylesByIdCompany(this.idCompany).subscribe({
      next:(result: Styles[])=>{
        this.allStyles = result;
      }
    })
  }

  findListAllSizesPerStyle(theIdStyle: number){
    if(theIdStyle > 0){
      this.selectedIdStyle = theIdStyle;
      //console.log("the selected style Id (this.selectedIdStyle) = "+this.selectedIdStyle);
      this._apicallservice.GetListAllSizesByIdCompanyAndStyle(this.idCompany, theIdStyle).subscribe({
        next:(result: Sizes[]) => { this.allSizes = result; }
      })
    }
  }

  listAllLengthPerStyleAndSize(theIdSize: any, theIdStyle: number){
    //this.selectedIdSize = theIdSize;
    console.log("the selected size value is (this.selectedIdSize) :"+this.selectedIdSize)
    if(theIdStyle > 0 && theIdSize > 0){
      this.selectedIdSize = theIdSize;
      this._apicallservice.GetListAllLengthsByIdCompanyStyleAndSize(this.idCompany, theIdStyle, theIdSize).subscribe({
        next:(result: Lengths[]) => {this.allLengths = result}
      })
    }
  }


  GetTheSelectedLength(theIdLength: any){
      this.selectedIdLength = theIdLength;
      console.log("the selected Length value is (this.selectedIdLength) :"+this.selectedIdLength)
  }


  //Get extrat price by style, size and length
  /*
  listAllExtratBraidingPrices(theIdLength: number, theIdStyle: number, theIdSize: number){
    if(theIdStyle > 0 && theIdSize > 0 &&  theIdLength > 0){

      this._apiCall.GetExtratBraidingPrices_Get(theIdStyle, theIdSize, theIdLength).subscribe({
        next:(result) => {this.selectedExtraPrices = result; console.log("The extratprices :"+this.selectedExtraPrices.costExtra)}
      })
    }
  }
  */


  onLengthSelection(theLength: any){
    this.selectedIdLength = theLength;
    console.log("the selected Length value is (this.selectedIdLength) :"+this.selectedIdLength)
  }


  findListAllCatalogImages(){
    this._apicallservice.GetListAllCatalogsByParams(this.idCompany, this.selectedIdStyle, this.selectedIdSize, this.selectedIdLength).subscribe({
      next:(result: CatalogsCombine[])=>{
        this.listCatalogImages = result;
        console.log("catalog = "+this.listCatalogImages);
      }
    })
  }

}
