import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nameUserConnected: any ;
  roleUserConnected: any;

    constructor(public sidebarservice: SidebarService, private _router: Router) { }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
      this.nameUserConnected = localStorage.getItem('name');
      this.roleUserConnected = localStorage.getItem('role');

      /* Search Bar */
      $(document).ready(function () {
          $(".search-toggle-icon").on("click", function() {
              $(".top-header .navbar form").addClass("full-searchbar")
          })
          $(".search-close-icon").on("click", function() {
              $(".top-header .navbar form").removeClass("full-searchbar")
          })
          
      });


    }

    logOut(){
        sessionStorage.removeItem('iduser');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('iduserperrole');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('idcompany');
        sessionStorage.removeItem('token');

        this._router.navigate(['/login']);

    }

}
