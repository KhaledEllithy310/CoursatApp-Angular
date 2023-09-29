import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: Login = {
    email: '',
    password: '',
  };

  constructor(
    private login: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  handelSubmit(form: NgForm) {
    if (form.valid) {
      this.login.loginUser(form.value).subscribe((res: any) => {
        console.log(res);
        if (res.apiStatus) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('type', res.data.userData.userType);
          localStorage.setItem('userData', JSON.stringify(res.data.userData));
          this.login.userType = res.data.userData.userType;
          console.log(res.data.token);
          console.log(res.data.userData.userType);

          this.login.isLogin = true;
          console.log(this.login.isLogin);
          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
          setTimeout(() => {
            console.log('ana fe login');

            this.router.navigate(['']);
          }, 1500);
        }
        //show notification message
      });
    }
  }
}
