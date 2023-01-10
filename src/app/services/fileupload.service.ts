import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  progress!: number;
  message!: string;
  @Output() public onUploadFinished = new EventEmitter();
  
  idCompany: any = localStorage.getItem("idcompany");

  urlServer: string = 'http://localhost:5000/api/'
  constructor(private http: HttpClient) { }


  //**************************************** */
  
  uploadFile(files: string | any[]){
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    

    //this.uploadFile(fileToUpload)
    this.http.post(this.urlServer+'upload/uploadfile', formData, {reportProgress: true, observe: 'events'})
    .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress){
          let total: any = event.total;
            this.progress = Math.round(100 * event.loaded / total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }


  uploadMultipleFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let filesToUpload : File[] = files;
    const formData = new FormData();
    
    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file'+index, file, file.name);
    });
    this.http.post(this.urlServer+'upload/uploadmultiplefile', formData, {reportProgress: true, observe: 'events'})
      .subscribe(
        {next: (event) => {
          if (event.type === HttpEventType.UploadProgress){
            let total: any = event.total;
            this.progress = Math.round(100 * event.loaded / total);
          }
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
  
  uploadFilePerso(files: any){
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    
    //this.uploadFile(fileToUpload)
    this.http.post(this.urlServer+'upload/uploadfilePerso/'+this.idCompany+"/STYLE", formData, {reportProgress: true, observe: 'events'})
    .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress){
          let total: any = event.total;
          this.progress = Math.round(100 * event.loaded / total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}
