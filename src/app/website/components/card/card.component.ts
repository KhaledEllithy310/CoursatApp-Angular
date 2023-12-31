import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';
import { CartService } from './../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  isLoading: boolean = true;
  allCourses: any[] = [];
  constructor(
    public auth: LoginService,
    private coursesService: CoursesService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllCoursesPublish().subscribe(
      (res) => {
        console.log(res);
        this.allCourses = res.data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  addToCart(courseId: any) {
    let token = localStorage.getItem('token');
    if (token) {
      this.cartService.addToCart(courseId).subscribe(
        (res: any) => {
          console.log(res);
          this.cartService.countCoursesInCart++;
          console.log(this.cartService.countCoursesInCart);

          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
        },
        (err: any) => {
          console.log(err);
          this.toastr.error(err.error.data, 'Error', { timeOut: 1000 });
        }
      );
    } else this.toastr.error('please log in', 'Error', { timeOut: 1000 });
  }

  addToWishList(courseId: any) {
    let token = localStorage.getItem('token');
    if (token) {
      this.cartService.addToWishList(courseId).subscribe(
        (res: any) => {
          console.log(res);
          // this.cartService.countCoursesInCart++;
          // console.log(this.cartService.countCoursesInCart);

          this.toastr.success(res.message, 'Success', { timeOut: 1000 });
        },
        (err: any) => {
          console.log(err);
          this.toastr.error(err.error.data, 'Error', { timeOut: 1000 });
        }
      );
    } else this.toastr.error('please log in', 'Error', { timeOut: 1000 });
  }
}
