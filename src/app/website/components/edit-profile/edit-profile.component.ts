import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  userData!: any;
  emailFieldDirty = false;
  model = {
    email: '',
    password: '',
    lastName: '',
    firstName: '',
  };

  constructor(
    private auth: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showMyProfile();
  }

  handelSubmit(form: NgForm) {
    if (form.valid && form.dirty) {
      console.log(this.model);
      this.auth.editProfile(this.model).subscribe(
        (res) => {
          console.log(res);
          console.log(typeof this.userData.email);
          console.log(typeof this.model.email);
          form.reset();
          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
          console.log(form.controls['email'].dirty);
          console.log(form);

          // if (form.controls['email'].dirty) {
          //   console.log('Email field is dirty');
          //   console.log(form);

          //   // this.auth.logOut().subscribe((res) => {
          //   //   console.log(res);
          //   //   localStorage.removeItem('token');
          //   //   localStorage.removeItem('userData');
          //   //   localStorage.removeItem('type');
          //   //   // this.router.navigateByUrl('');
          //   //   this.router.navigate(['/login']);
          //   // });
          // }

          // setTimeout(() => {
          //   this.router.navigate(['']);
          // }, 1500);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }


  showMyProfile() {
    this.auth.showProfile().subscribe(
      (res) => {
        console.log(res.data);
        this.model = res.data;
        this.userData = res.data;
        console.log(this.userData);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
