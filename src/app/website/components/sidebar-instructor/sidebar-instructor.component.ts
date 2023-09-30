import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-sidebar-instructor',
  templateUrl: './sidebar-instructor.component.html',
  styleUrls: ['./sidebar-instructor.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, width: '300px' })),
      state('out', style({ opacity: 0, width: '0' })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class SidebarInstructorComponent {
  constructor(private router: Router, public auth: LoginService) {}

  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  navigateToPage(route: string) {
    this.router.navigateByUrl(route);
  }
}
