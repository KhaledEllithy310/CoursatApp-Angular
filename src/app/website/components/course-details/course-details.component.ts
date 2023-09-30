import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  constructor(
    private activate: ActivatedRoute,
    private coursesService: CoursesService,
    public auth: LoginService
  ) {}

  courseId: any;
  contentCourse: any = [];
  course: any;
  selectedVideoUrl!: string;
  // isContent: boolean = this.contentCourse.length > 0 ? true : false;
  ngOnInit() {
    this.activate.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
      if (localStorage.getItem('type') == 'student')
        this.showCourseByIdForStudents();
      else this.showCourseById();
    });
  }

  showCourseById() {
    this.coursesService.getCourseById(this.courseId).subscribe(
      (res) => {
        console.log(res);
        this.course = res.data;
        this.contentCourse = res.data.content;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showCourseByIdForStudents() {
    this.coursesService.showCourseByIdForStudents(this.courseId).subscribe(
      (res) => {
        console.log(res);
        this.course = res.data;
        this.contentCourse = res.data.content;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  toggleContent(index: number) {
    this.contentCourse[index].collapsed = !this.contentCourse[index].collapsed;
  }

  openVideo(url: string) {
    this.selectedVideoUrl = 'http://localhost:3000/' + `${url}`;
  }

  openAssignment(url: string) {
    window.open('http://localhost:3000/' + `${url}`, '_blank');
  }

  get isContent(): boolean {
    return this.contentCourse.length > 0;
  }
}
