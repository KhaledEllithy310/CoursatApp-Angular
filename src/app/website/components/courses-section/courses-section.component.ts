import { Component, Input } from '@angular/core';
import { CoursesService } from './../../../services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css'],
})
export class CoursesSectionComponent {
  @Input() courses: any[] = [];
  @Input() isLoading: boolean = false;
  constructor(
    private coursesService: CoursesService,
    public auth: LoginService
  ) {}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllCoursesAll().subscribe((res) => {
      console.log(res);
      this.courses = res.data;
    });
  }
}
