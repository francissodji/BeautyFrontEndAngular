import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Styles } from 'src/app/data/models/Styles';
import { ApicallService } from './apicall.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralproceduresService {

  theStyle: Styles = new Styles();
  libelStyle: string = '';

  myDateValu: Date = new Date();
  returnDateTime: any;

  

  constructor() { }
 
  parseDateTime(theDatePassed:any):Date{
    
    console.log("the passed date => "+theDatePassed)
    var day:any = theDatePassed.getDate();
    if (day < 10) {
      day = "0"+day;
    }

    var month:any = theDatePassed.getMonth() + 1;
    if (month < 10) {
      month = "0"+ month;
    }

    var year:any = theDatePassed.getFullYear();

    var hour:any = theDatePassed.getHours();

    var minute:any = theDatePassed.getMinutes();

    this.returnDateTime = year + "-" + month + "-" + day + "T" + hour + ":" + minute;

    return this.returnDateTime;
  }


  
  dateFromDbToView(theDatePassed:any):Date{
    let newDate: Date = new Date(theDatePassed);

    var day:any = newDate.getDate();
    if (day < 10) {
      day = "0"+day;
    }

    var month:any = newDate.getMonth() + 1;
    if (month < 10) {
      month = "0"+ month;
    }

    var year:any = newDate.getFullYear();

    var hour:any = newDate.getHours();

    var minute:any = newDate.getMinutes();

    this.returnDateTime = month + "/" + day + "/" + year + " " + hour + ":" + minute;
    return this.returnDateTime;
    //return newDate;
  }

  /*
  stringDate:string = '';
  TransformDateFormat(sendDate: Date):string {

    let stringDate = this._datepipe.transform(sendDate, 'yyyy-MM-dd') || '';

    return stringDate;
  }
*/

   /*
  myDate: Date = new Date();
  retrieveDate(sendDate: Date):Date{

    this.myDate = new Date(sendDate.getFullYear(), sendDate.getMonth(), sendDate.getDay())
    
     return this.myDate;
  }

  /*
  getLibelStyle(idStyle:number): string | undefined{
    if(idStyle > 0){
      this.apicall.GetStyleByIdStyle(idStyle).subscribe({
        next:(res)=>{
          this.theStyle = res;
          this.libelStyle = this.theStyle.desigStyle;
        }
      })
    }
    return this.libelStyle;
  }
  */
  
}
