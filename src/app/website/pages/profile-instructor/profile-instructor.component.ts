import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-instructor',
  templateUrl: './profile-instructor.component.html',
  styleUrls: ['./profile-instructor.component.css'],
})
export class ProfileInstructorComponent {
  constructor(private router: Router, public auth: LoginService) {}
  userData: any;

  ngOnInit() {
    this.showMyProfile();
  }
  showMyProfile() {
    this.auth.showProfile().subscribe((res) => {
      this.userData = res.data;
      console.log(res);
    });
  }
}
