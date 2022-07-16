import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StyleBuilder } from '@angular/flex-layout';
import { Appointment } from 'src/models/Appointment';
import { Customer } from 'src/models/Customer';
import { ExtratStyle } from 'src/models/ExtratStyle';
import { Login } from 'src/models/Login';
import { Size } from 'src/models/Size';
import { State } from 'src/models/State';
import { Style } from 'src/models/Style';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {


  urlApi: string = 'http://localhost:5000/api/';



  constructor(private _httpClient: HttpClient) { }


  //**********************Login */

  login_Post(loginOccurence: Login){
    console.log("in api =>")
    return this._httpClient.post<User>(this.urlApi+"account/login",loginOccurence);
  }

  //******************************Add new Appointment
  addnewAppointment_Post(AppointOccurence: Appointment){
    return this._httpClient.post<Appointment>(this.urlApi+"appointment",AppointOccurence);
  }

  //***********************************
  GetClientOpenAppointByIdClientAndStateAppoint(clientId: number, appointState: string){
    return this._httpClient.get<Appointment[]>(this.urlApi+"appointment/byidclientandappointstate/"+clientId+"/"+appointState);
  }

    //***********************************
  //GetAppointByStateAppointAndDates(appointState: string, dateBeginSearch: Date, dateEndSearch: Date){
  GetAppointByStateAppointAndDates(appointState: string){
    return this._httpClient.get<Appointment[]>(this.urlApi+"appointment/byappointstateanddate/"+appointState);
  }
  //************************************ 
  ConfirmAppointment_Put(id: number, AppointOccurence: Appointment){
    return this._httpClient.put(this.urlApi+"appointment/"+id, AppointOccurence)
  }

  //******************************************************************************** */

  //**********************Add New Client
  addnewCustomer_Post(clientOccurence: Customer){
    return this._httpClient.post<Customer>(this.urlApi+"client",clientOccurence);
  }
  
  //**********************Client by phone
  GetClientByCellPhone_Get(celphone: string){
    
    return this._httpClient.get<Customer>(this.urlApi+"client/bycelphone/"+celphone);
  }
  //**************************************************************************** */

  //State
  listAllStates_Get(){
    return this._httpClient.get<State>(this.urlApi+"state");
  }


  //********************Style
  listAllStyles_Get(){
    return this._httpClient.get<Style>(this.urlApi+"style");
  }

  
  GetStyleByIdStyle(theIdStyle: Number) {
    return this._httpClient.get<Style>(this.urlApi+"style/"+theIdStyle)
  }

  //********************Size
  listAllSizes_Get(){
    return this._httpClient.get(this.urlApi+"size");
  }

  GetSizeByIdSize(theIdSize: number){
    return this._httpClient.get(this.urlApi+"size/"+theIdSize);
  }

  GetSizesByIdStyle_Get(theIdStyle: number){
    return this._httpClient.get<any>(this.urlApi+"size/bystyle/"+theIdStyle);
  }


  //******************Lenght
  listAllLenghts_Get(){
    return this._httpClient.get(this.urlApi+"extrat");
  }

  GetLenghtByIdLenght(theIdLenght: number){
    return this._httpClient.get(this.urlApi+"extrat/"+theIdLenght);
  }

  listAllLenghtsByStyleAndSize_Get(theIdStyle: number, theIdSize: number){
    return this._httpClient.get<any>(this.urlApi+"extrat/bystyleandsize/"+theIdStyle+"/"+theIdSize)
  }



  //**************************** Extrat Style */

  //******************Get all Prices in ExtratStyle */
  GetExtratBraidingPrices_Get(theIdStyle: number, theIdSize: number, theIdLength: number){
    return this._httpClient.get<any>(this.urlApi+"extratstyle/extratprices/"+theIdStyle+"/"+theIdSize+"/"+theIdLength);
  }

  //********* Braiding Cost */
  GetBraidingCosts(theIdStyle: number, theIdSize: number, theIdLength: number, theServiceType: string, theIsTakeDown: boolean){
    return this._httpClient.get<any>(this.urlApi+"extratstyle/braidingcost/"+theIdStyle+"/"+theIdSize+"/"+theIdLength+"/"+theServiceType+"/"+theIsTakeDown);
  }
}
