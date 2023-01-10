import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['signin-with-header-footer'], { relativeTo: this.route.parent });
  }
  // On Signup link click
  onSignup() {
    this.router.navigate(['signup-with-header-footer'], { relativeTo: this.route.parent });
  }
  

  ngOnInit(): void {
  }

}
