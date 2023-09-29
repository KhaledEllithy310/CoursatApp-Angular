import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.css'],
})
export class AccountSecurityComponent {
  model = {
    password: '',
  };

  constructor(
    private auth: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  handelSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.model);
      if (this.model.password) {
        this.auth.editProfile(this.model).subscribe(
          (res) => {
            console.log(res);
            form.reset();
            this.toastr.success('change password successfully', 'Success', {
              timeOut: 1000,
            });
            this.logOut();
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 1500);
          },
          (err) => {
            console.log(err);
          }
        );
      }

      // this.login.loginUser(form.value).subscribe((res: any) => {
      //   console.log(res);
      //   if (res.apiStatus) {
      //     localStorage.setItem('token', res.data.token);
      //     localStorage.setItem('type', res.data.userData.userType);
      //     this.login.userType = res.data.userData.userType;
      //     console.log(res.data.token);
      //     console.log(res.data.userData.userType);

      //     this.login.isLogin = true;
      //     console.log(this.login.isLogin);
      //   }
      //   //show notification message
      //   this.toastr.success(res.message, 'Success', { timeOut: 1000 });
      //   setTimeout(() => {
      //     this.router.navigate(['']);
      //   }, 1500);
      // });
    }
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
