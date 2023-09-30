import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent {
  isLoading: boolean = true;
  allCourses: any[] = [];

  constructor(
    public auth: LoginService,
    private coursesService: CoursesService
  ) {}
  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getMyCourses().subscribe(
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
}
