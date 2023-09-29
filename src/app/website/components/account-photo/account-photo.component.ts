import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account-photo',
  templateUrl: './account-photo.component.html',
  styleUrls: ['./account-photo.component.css'],
})
export class AccountPhotoComponent {
  image: any = null;
  imageName: any = null;
  isLoading: boolean = false;
  constructor(private auth: LoginService) {}
  handleChange(event: any) {
    this.image = event.target.files[0];
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('image', this.image);
    this.auth.uploadImage(formData).subscribe(
      (res) => {
        this.isLoading = true;

        console.log(res);
        this.imageName = res.data.image;
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.auth.userData = res.data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
