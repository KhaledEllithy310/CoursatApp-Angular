import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent {
  // allCourses: any[] = [];
  isLoading: boolean = false;
  myCourseCart: any[] = [];
  responseDelete: any;
  promoCode: string = '';
  constructor(
    private coursesService: CoursesService,
    public auth: LoginService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.showCoursesCart();
  }

  showCoursesCart() {
    this.cartService.showMyCart().subscribe((res) => {
      console.log(res.data.cart);
      // console.log(res.data.cart[2].courseId._id);
      this.myCourseCart = res.data.cart;
    });
  }

  deleteCourseFromCart(courseId: any) {
    this.cartService.deleteCourseFromCart(courseId).subscribe((res) => {
      console.log(res);
      // Update the cart data after successful deletion
      this.showCoursesCart();
    });
  }

  totalPrice() {
    let totalPriceCourses: any = 0;
    this.myCourseCart.forEach((course) => {
      // console.log(+course.courseId.price);
      totalPriceCourses += +course.courseId.price;
    });
    // console.log(totalPriceCourses);
    return totalPriceCourses;
  }

  // checkout to add course in my learning
  checkOut() {
    console.log(this.promoCode);
    const coursesIds = this.myCourseCart.map((course) => {
      return course.courseId._id;
    });

    this.cartService
      .addToMyLearning({ promoCode: this.promoCode, coursesIds })
      .subscribe(
        (res) => {
          console.log(res);
          this.showCoursesCart();
          this.cartService.countCoursesInCart = 0;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
