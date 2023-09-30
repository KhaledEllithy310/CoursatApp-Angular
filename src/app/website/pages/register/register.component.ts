import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  UserType: any;
  constructor(
    private login: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}
  model = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
  };

  ngOnInit() {
    this.activated.data.subscribe((res) => {
      console.log(res['type']);
      this.UserType = res['type'];
    });
  }
  handleSubmit(form: NgForm) {
    // const image: File = this.imageInput.nativeElement.files[0];

    if (form.valid) {
      if (this.UserType == 'student') {
        this.login.registerStudent(this.model).subscribe((res: any) => {
          console.log(res);

          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 1500);
        });
      } else if (this.UserType == 'instructor') {
        this.login.registerInstructor(this.model).subscribe((res: any) => {
          console.log(res);

          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 1500);
        });
      }
    }
  }
  // handleSubmit(form: NgForm) {
  //   if (form.valid) {
  //     const image: File = this.imageInput.nativeElement.files[0];

  //     const formData = new FormData();
  //     formData.append('firstName', this.model.firstName || ''); // Make sure to provide default values if the fields are optional
  //     formData.append('lastName', this.model.lastName || '');
  //     formData.append('email', this.model.email || '');
  //     formData.append('gender', this.model.gender || '');
  //     formData.append('password', this.model.password || '');
  //     formData.append('image', image);

  //     console.log('Form Data:', formData);

  //     this.login.registerStudent(formData).subscribe((res: any) => {
  //       console.log('Response:', res);
  //       // Additional logic after successful submission
  //     });
  //   }
  // }
}
