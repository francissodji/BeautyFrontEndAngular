import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Catalogs } from 'src/app/data/models/Catalogs';
import { Styles } from 'src/app/data/models/Styles';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-addcatalog',
  templateUrl: './addcatalog.component.html',
  styleUrls: ['./addcatalog.component.css']
})
export class AddcatalogComponent implements OnInit {

  newCatalogForm! : FormGroup;
  listStyles: Styles[] | undefined;
  selectedStyle: number | undefined;
  newCatalog: Catalogs = new Catalogs()
  
  
  response!: { dbPath: ''; };
 
  hairIsProvided: boolean = false;
  idCompany: any;

    constructor(private _formBuilder: FormBuilder, 
    private _apicallservice: ApicallService, 
    private _router: Router,
    private _alertify: AlertifyService) { }


    ngOnInit(): void {
      $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
      $.getScript("./assets/js/add-new-product-image-upload.js");
  
      //File uploader
      $.getScript('./assets/plugins/fancy-file-uploader/jquery.ui.widget.js');
      $.getScript('./assets/plugins/fancy-file-uploader/jquery.fileupload.js');
      $.getScript('./assets/plugins/fancy-file-uploader/jquery.iframe-transport.js');
      $.getScript('./assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js');
      $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
      $.getScript('./assets/js/custom-file-upload.js');
  
      //Form
      this.newCatalogForm = this._formBuilder.group({
        idStyle : new FormControl('', [Validators.required]),
        imageLink : new FormControl(''),
        idCompany : new FormControl(this.idCompany)
      })

      //style
      this.listeAllStyles();
  
    }
  
    //All Style
  listeAllStyles(){
    this._apicallservice.GetListAllStylesByIdCompany(this.idCompany).subscribe({
      next:(result)=>{
        this.listStyles = result;
      }
    })
  }
  
  addNewCatalog(){
    //console.log("In new style");
    if(this.newCatalogForm.valid){
      //console.log("In new style: dbpath = "+this.response.dbPath);
      this.newCatalog.idCompany = this.idCompany;
      this.newCatalog.imageLink = this.response.dbPath.toString(); //this.response.dbPath will send the path to be added to the db.

      //console.log("path to image in db db = "+this.newStyle.pictureStyle);

      this._apicallservice.PostNewCatalog(this.newCatalog)
      .subscribe({
        next:(res)=>{
          this._alertify.success("Picture added successfully.");
          this.newCatalogForm.reset(); 
        },
        error:(erro)=>{
          this._alertify.warning("Error while saving the image.");
        }
      })
    }
    else{
      this._alertify.error("Something went wrong!!! Impossible to continue.")
    }
  }

  uploadFinished(event: any){ 
    //console.log("db path in Event = "+event);
    this.response = event; 
    //console.log("db path in response = "+this.response.dbPath);
  }


  onStyleSelection(theStyle: any){
    this.selectedStyle = theStyle;
  }

}
