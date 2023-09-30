import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';
import { WishListService } from './../../services/wish-list.service';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.css'],
})
export class MyWishListComponent {
  isLoading: boolean = false;
  allCourses: any[] = [];
  constructor(
    public auth: LoginService,
    private coursesService: CoursesService,
    private cartService: CartService,
    private toastr: ToastrService,
    private WishListService: WishListService
  ) {}

  ngOnInit() {
    this.getAllCourses();
  }
  getAllCourses() {
    this.WishListService.showMyWishList().subscribe(
      (res) => {
        console.log(res.data.wishList);
        this.allCourses = res.data.wishList;
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
          this.getAllCourses();

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
