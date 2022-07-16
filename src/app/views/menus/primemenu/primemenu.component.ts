import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-primemenu',
  templateUrl: './primemenu.component.html',
  styleUrls: ['./primemenu.component.css']
})
export class PrimemenuComponent implements OnInit {


  user: User|null = null;


  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login(): void{

  }

  logout(e: Event) {
    e.preventDefault();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  openListOfAllAppointment(){
    
  }
}
