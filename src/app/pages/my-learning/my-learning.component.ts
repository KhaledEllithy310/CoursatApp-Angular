import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { MyLearningService } from './../../services/my-learning.service';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css'],
})
export class MyLearningComponent {
  isLoading: boolean = false;
  allCourses: any[] = [];
  constructor(
    public auth: LoginService,
    private coursesService: CoursesService,
    private cartService: CartService,
    private toastr: ToastrService,
    private WishListService: WishListService,
    private MyLearningService: MyLearningService
  ) {}

  ngOnInit() {
    this.getAllCourses();
  }
  getAllCourses() {
    this.MyLearningService.showMyLearning().subscribe(
      (res: any) => {
        console.log(res);
        this.allCourses = res.data.myLearning;
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
