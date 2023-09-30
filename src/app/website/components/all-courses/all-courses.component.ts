import { Component } from '@angular/core';
import { CoursesService } from './../../../services/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent {
  constructor(private coursesService: CoursesService) {}

  allCourses: any[] = [];
  isLoadingBig: boolean = true;
  ngOnInit() {
    // get all courses
    this.getAllCourses();
  }

  // get all courses
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
        this.isLoadingBig = false;
      }
    );
  }
}
