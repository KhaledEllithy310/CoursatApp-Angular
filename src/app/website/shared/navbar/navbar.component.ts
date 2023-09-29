import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userType: any;
  constructor(public auth: LoginService) {
    if (localStorage.getItem('token')) this.auth.isLogin = true;
    console.log(auth.isLogin);
  }
  handleLogOut() {
    this.auth.isLogin = false;
    console.log(this.auth.isLogin);
    this.logOut();
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('type');
  }

  logOut() {
    this.auth.logOut().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
