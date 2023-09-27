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
      console.log(form.value);
      this.login.loginUser(form.value).subscribe((res: any) => {
        console.log(res);
        // this.toastr.success(res.message);
        this.toastr.success(res.message, 'Success', { timeOut: 1000 });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1500);
      });
    }
  }
}
