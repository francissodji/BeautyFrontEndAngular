import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService, private router: Router){
    
  }

  canActivate() {
    if(this.auth.isLoggedIn()){
      return true;
    }
    alert("You have not logged in")
    this.router.navigate(['login'])
    return false;
  }
  
}
