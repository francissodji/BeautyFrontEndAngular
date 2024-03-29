import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from 'src/app/shared/component/sidebar/sidebar.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(public sidebarservice: SidebarService,
    private router: Router) { }

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
this.router.events.subscribe((evt) => {
if (!(evt instanceof NavigationEnd)) {
    return;
}
window.scrollTo(0, 0)
});
}

}
