import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnnectUser } from 'src/app/data/models/ConnnectUser';
import { Login } from 'src/app/data/models/Login';
import { User } from 'src/app/data/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  loading: boolean = false;
  submitted: boolean = false;
  loginOccur: Login = new Login();
  connectedUser: ConnnectUser = new ConnnectUser();
  
  nameconnected: string = ''


  constructor(
    private _router: Router, 
    private _route: ActivatedRoute, 
    private _formBuilder: FormBuilder,
    private _apiCall: ApicallService) { }


    ngOnInit(): void {
    
      this.loginForm = this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    } 

   // On SignIn link click
  onSignIn() {
    this.submitted = true;

    if (this.loginForm?.invalid)
    {
      alert("In login")
      return;
    }

    //this._apiCall.loggedUserIn(this.loginForm.value)
    this._apiCall.loggedUserIn(this.loginOccur)
    .subscribe({
      next:(result)=>{
        
        this.connectedUser = result; 
        if (this.connectedUser.middleNClientBraider = '') {
          this.nameconnected = this.connectedUser.firstNClientBraider+" "+this.connectedUser.lastNClientBraider;
        }else{
          this.nameconnected = this.connectedUser.firstNClientBraider+" "+this.connectedUser.middleNClientBraider+" "+this.connectedUser.lastNClientBraider;
        }
        var objUser = JSON.stringify(this.connectedUser);
        console.log("user = "+this.connectedUser.idUser?.toString());
        console.log("client = "+this.connectedUser.idClientBraider?.toString());
        console.log("company = "+this.connectedUser.idCompany?.toString());
        localStorage.setItem('iduser', this.connectedUser.idUser?.toString() || '');//idUser represent  the id of the user in User Table
        localStorage.setItem('role', this.connectedUser.role);//idUser represent  the id of the user in User Table
        localStorage.setItem('iduserperrole', this.connectedUser.idClientBraider?.toString() || '');//idroleuser of the actual owner/braider/client/admin
        localStorage.setItem('name', this.nameconnected);
        localStorage.setItem('idcompany', this.connectedUser.idCompany?.toString() || '');
        localStorage.setItem('token', this.connectedUser.accessTocken);
        
        this._router.navigate(['/view']);
      },
      error:(erro)=>{
        alert("Error while connecting.");
      }
    })

    //this._router.navigate(['signin-with-header-footer'], { relativeTo: this._route.parent });
  }


  // On Forgotpassword link click
   onForgotpassword() {
    this._router.navigate(['forgot-password'], { relativeTo: this._route.parent });
  }

  // On Signup link click
  onSignup() {
    this._router.navigate(['signup-with-header-footer'], { relativeTo: this._route.parent });
  }

  logout(){
    sessionStorage.removeItem('user');
    //this.storeService.user = null;
  }

  onLogin(){
    
  }
  
}
