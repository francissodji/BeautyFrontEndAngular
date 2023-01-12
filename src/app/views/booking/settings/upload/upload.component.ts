import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileuploadService } from 'src/app/services/fileupload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  idCompany: any = localStorage.getItem("idcompany");
  
  progress: any;
  message: string | undefined;
  response: { dbPath: ''; } | undefined;
  @Output() public onUploadFinished = new EventEmitter();
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  urlServer: string = 'http://localhost:5000/api/'

  constructor(private http: HttpClient, private fileUploadService: FileuploadService) { }

  ngOnInit(): void {
  }

  uploadSingleFile(files: any){
    this.fileUploadService.uploadFile(files)
  }

  uploadMultipleFile(files: any){
    this.fileUploadService.uploadMultipleFile(files)
  }

  uploadSingleFilePerso(files: any){
    this.fileUploadService.uploadFilePerso(files)
  }

  
  uploadFilePerso(files: any){
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

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


  
  /*
  uploadFile(files){

    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    

    //this.uploadFile(fileToUpload)
    this.http.post('http://localhost:5000/api/upload/uploadfile', formData, {reportProgress: true, observe: 'events'})
    .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
  */

}
