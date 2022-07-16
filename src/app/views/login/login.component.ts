import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/models/Login';
import { User } from 'src/models/User';

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
  connectedUser: User = new User();
  error:string = '';

  constructor(
      private formBuilder: FormBuilder,
      public authenticationService: AuthenticationService,
      public route: ActivatedRoute,
      public router: Router, 
      private _apiCall: ApicallService
  ) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(){
    
    this.submitted = true;

    if (this.loginForm?.invalid)
    {
      alert("In login")
      return;
    }
    

    this.loading = true;

    this._apiCall.login_Post(this.loginForm.value)
    .subscribe({
      next:(result)=>{
        alert("Login added successfully.");
        this.connectedUser = result; 
        console.log("Connected user: IdUser = "+this.connectedUser.IDUser+" - Profil = "+this.connectedUser.IdProfil+" - Token = "+this.connectedUser.token)
      },
      error:(erro)=>{
        alert("Error while saving the appointment.");
      }
    })

    /*
    console.log("User = "+this.connectedUser);
    

    if(this.connectedUser != null){
      console.log("666666666666666666666666");
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([returnUrl]);
    }
    else{
          this.loading = false;
    }
    */
  }

  logout(){
    sessionStorage.removeItem('user');
    //this.storeService.user = null;
  }
  
}
