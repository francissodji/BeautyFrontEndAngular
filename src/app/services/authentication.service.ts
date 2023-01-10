import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/data/models/Login';
import { User } from 'src/app/data/models/User';
import { ApicallService } from './apicall.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  user: User = new User();
  error: string = '';

  constructor(
    private apiCall: ApicallService
  ) { }

  login(loginAuthent:Login): any {

    /*
    this.apiCall.login_Post(loginAuthent)
      .pipe(
        map(user =>{
          console.log("Dand API");
          sessionStorage.setItem('user', JSON.stringify(user));
          //this.isLoggedIn();
          console.log("Dand API");
          return user;
          
        })
      )
      */
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('user')
  }

  logout() {
    sessionStorage.removeItem('user');
    //this.storeService.user = null;
  }

}
