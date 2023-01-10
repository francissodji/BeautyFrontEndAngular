
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Catalogs } from 'src/app/data/models/Catalogs';
import { CatalogsCombine } from 'src/app/data/models/CatalogsCombine';
import { ConnnectUser } from 'src/app/data/models/ConnnectUser';
import { Lengths } from 'src/app/data/models/Lengths';
import { Login } from 'src/app/data/models/Login';
import { Register } from 'src/app/data/models/Register';
import { Sizes } from 'src/app/data/models/Sizes';
import { Styles } from 'src/app/data/models/Styles';
import { User } from 'src/app/data/models/User';
//import { Catalogs } from 'src/app/models/Catalogs';
//import { CatalogsCombine } from 'src/app/models/CatalogsCombine';
//import { ConnnectUser } from 'src/app/models/ConnectUser';


//import { Lengths } from 'src/app/models/Lengths';

//import { Login } from 'src/app/models/Login';
//import { Register } from 'src/app/models/Register';
//import { Sizes } from 'src/app/models/Sizes';
//import { Styles } from 'src/app/models/Styles';
//import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  apiServer: string = 'http://localhost:5000/api/';

  idCompany: any = 0 // +localStorage.getItem("idcompany");
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

      
  constructor(private _httpClient: HttpClient) { }

  //*********************** upload file ******************* */
  uploadFile(fileToUpload: File){
    //let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._httpClient.post(this.apiServer+"upload", formData, {reportProgress: true, observe: 'events'})
  }
  //**********************Login */

  theUser: User = new User();

  regiserUser(register: Register){
    return this._httpClient.post<any>(this.apiServer+"user/register", register, this.httpOptions);
  }

  loggedUserIn(loginUser: Login){
    return this._httpClient.post<ConnnectUser>(this.apiServer+"user/auth", loginUser, this.httpOptions);
  }

  getUserByIdUser(idUser: any){
    //return this._httpClient.get<any>(this.apiServer+"user/account/"+idUser, { headers: this.headers });
  }

  //**********States */
  //State
  listAllStates_Get(){
    //return this._httpClient.get<State>(this.apiServer+"state");
  }
  //****************** */

  //*****************Length
  PostNewLength(length: Lengths): Observable<Lengths>{
    return this._httpClient.post<Lengths>(this.apiServer+"length/newlength", length, this.httpOptions);
  }

  GetListAllLengths(): Observable<Lengths[]>{
    return this._httpClient.get<Lengths[]>(this.apiServer+"length/all", this.httpOptions);
  }

  GetListAllLengthsByIdCompany(idCompany: number): Observable<Lengths[]>{
    return this._httpClient.get<Lengths[]>(this.apiServer+"length/all/"+idCompany, this.httpOptions);
  }

  GetLengthByIdLength(idLength: number): Observable<Lengths>{
    return this._httpClient.get<Lengths>(this.apiServer+"length/"+idLength, this.httpOptions);
  }

  GetListAllLengthsByIdCompanyStyleAndSize(theIdCompany: number, theIdStyle: number, theIdSize: number): Observable<Lengths[]>{
    return this._httpClient.get<Lengths[]>(this.apiServer+"length/bystyleandsize/"+theIdCompany+"/"+theIdStyle+"/"+theIdSize, this.httpOptions)
  }

  UpdateLength(theIdLenght: number, length: Lengths): Observable<Lengths>{
    return this._httpClient.put<Lengths>(this.apiServer+"length/update/"+theIdLenght, length, this.httpOptions);
  }

  DeleteLength(theIdLenght: number) {
    return this._httpClient.delete<Lengths>(this.apiServer+"length/delete/"+theIdLenght, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //********************************** */

  //********************* Sizes ********************** */

    PostNewSize(size: Sizes): Observable<Sizes>{
      return this._httpClient.post<Sizes>(this.apiServer+"size/newsize", size, this.httpOptions);
    }
  
    GetListAllSizes(): Observable<Sizes[]>{
      return this._httpClient.get<Sizes[]>(this.apiServer+"size/all", this.httpOptions);
    }

    GetListAllSizesByIdCompany(idCompany: number): Observable<Sizes[]>{
      return this._httpClient.get<Sizes[]>(this.apiServer+"size/all/"+idCompany, this.httpOptions);
    }
  
    GetSizeByIdSize(idSize: number): Observable<Sizes>{
      return this._httpClient.get<Sizes>(this.apiServer+"size/"+idSize, this.httpOptions);
    }

    GetListAllSizesByIdCompanyAndStyle(idCompany: number, idStyle: number): Observable<Sizes[]>{
      return this._httpClient.get<Sizes[]>(this.apiServer+"size/bystyle/"+idCompany+"/"+idStyle, this.httpOptions);
    }
  
    UpdateSize(theIdSize: number, size: Sizes): Observable<Sizes>{
      return this._httpClient.put<Sizes>(this.apiServer+"size/update/"+theIdSize, size, this.httpOptions);
    }
  
    DeleteSize(theIdSize: number) {
      return this._httpClient.delete<Sizes>(this.apiServer+"size/delete/"+theIdSize, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  //************************************************************ */

  //************************STYLE ******************* */
  PostNewStyle(style: Styles): Observable<Styles>{
    return this._httpClient.post<Styles>(this.apiServer+"style/newstyle", style, this.httpOptions);
  }

  GetListAllStyles(): Observable<Styles[]>{
    return this._httpClient.get<Styles[]>(this.apiServer+"style/all", this.httpOptions);
  }

  GetListAllStylesByIdCompany(idCompany: number): Observable<Styles[]>{
    return this._httpClient.get<Styles[]>(this.apiServer+"style/all/"+idCompany, this.httpOptions);
  }

  GetStyleByIdStyle(idStyle: number): Observable<Styles>{
    return this._httpClient.get<Styles>(this.apiServer+"style/"+idStyle, this.httpOptions);
  }

  //GetListAllLengthsByStyleAndSize(theIdStyle: number, theIdSize: number): Observable<Length[]>{
  //  return this._httpClient.get<Length[]>(this.apiServer+"length/bystyleandsize/"+theIdStyle+"/"+theIdSize)
  //}

  UpdateStyle(idStyle: number, style: Styles): Observable<Styles>{
    return this._httpClient.put<Styles>(this.apiServer+"style/update/"+idStyle, style, this.httpOptions);
  }

  DeleteStyle(idStyle: number) {
    return this._httpClient.delete<Styles>(this.apiServer+"style/delete/"+idStyle, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //*****************Catalog */
  PostNewCatalog(catalog: Catalogs): Observable<Catalogs>{
    return this._httpClient.post<Catalogs>(this.apiServer+"catalog/newcatalog", catalog, this.httpOptions);
  }


  GetListAllCatalogsByParams(idCompany: number, idStyle: number, idSize: number, idLength: number): Observable<CatalogsCombine[]>{
    return this._httpClient.get<CatalogsCombine[]>(this.apiServer+"catalog/byallparams/"+idCompany+"/"+idStyle+"/"+idSize+"/"+idLength, this.httpOptions);
  }

  GetListAllCatalogsByIdCompanyandStyle(idCompany: number, idStyle: number): Observable<Catalogs[]>{
    return this._httpClient.get<Catalogs[]>(this.apiServer+"catalog/bycompanyandstyle/"+idCompany+"/"+idStyle, this.httpOptions);
  }

  UpdateCatalog(idCatalog: number, catalog: Catalogs): Observable<Catalogs>{
    return this._httpClient.put<Catalogs>(this.apiServer+"catalog/update/"+idCatalog, catalog, this.httpOptions);
  }

  DeleteCatalog(idStyle: number) {
    return this._httpClient.delete<Catalogs>(this.apiServer+"catalog/delete/"+idStyle, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  //**************************************** */
  //******************Combine - Get all Prices */
  //Get
  //LoadCombineSizeByStyle
  GetCombineSizeByCompanyAndStyle(theIdCompany: number, theIdStyle: number){
    return this._httpClient.put<Catalogs>(this.apiServer+"combine/combinesize/"+theIdCompany+"/"+theIdStyle, this.httpOptions);
  }
  //LoadCombineLengthsByStyleAndSize

  GetExtratBraidingPrices_Get(theIdStyle: number, theIdSize: number, theIdLength: number){
    //return this._httpClient.get<any>(this.urlApi+"extratstyle/extratprices/"+theIdStyle+"/"+theIdSize+"/"+theIdLength);
  }

  //********* Braiding Cost */
  GetBraidingCosts(theIdStyle: number, theIdSize: number, theIdLength: number, theServiceType: string, theIsTakeDown: boolean){
    //return this._httpClient.get<any>(this.urlApi+"extratstyle/braidingcost/"+theIdStyle+"/"+theIdSize+"/"+theIdLength+"/"+theServiceType+"/"+theIsTakeDown);
  }




  //Error Handler
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
