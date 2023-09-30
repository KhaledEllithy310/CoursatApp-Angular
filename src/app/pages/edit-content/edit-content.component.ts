import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css'],
})
export class EditContentComponent {
  @ViewChild('InputVideo', { static: false }) InputVideo!: ElementRef;
  @ViewChild('InputAssignment', { static: false }) InputAssignment!: ElementRef;
  allCourses: any[] = [];

  model = {
    nameAssignment: '',
    nameVideo: '',
    courseId: '',
  };

  constructor(
    private login: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private coursesService: CoursesService,
    private activate: ActivatedRoute
  ) {}

  contentId: any;
  courseId: any;
  contentCourse: any = [];
  course: any;
  ngOnInit() {
    // this.getAllCourses();
    this.activate.paramMap.subscribe((params) => {
      this.contentId = params.get('contentId');
      this.courseId = params.get('courseId');
    });
  }

  handelSubmit(form: NgForm) {
    if (form) {
      const formData = new FormData();
      if (this.model.nameVideo)
        formData.append('videoName', this.model.nameVideo);
      if (this.InputVideo.nativeElement.files[0])
        formData.append('video', this.InputVideo.nativeElement.files[0]);
      if (this.model.nameAssignment)
        formData.append('assignmentName', this.model.nameAssignment);
      if (this.InputAssignment.nativeElement.files[0])
        formData.append(
          'assignment',
          this.InputAssignment.nativeElement.files[0]
        );
      // send request to server
      this.coursesService.editContent(formData, this.contentId).subscribe(
        (res) => {
          console.log(res);
          //clear all inputs
          form.reset();
          //clear image file
          const fileInput = document.getElementById(
            'courseImage'
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.value = '';
          }

          this.router.navigateByUrl(
            `instructor-account/course-details/${this.courseId}`
          );
        },
        (err) => {
          console.log(err);
        }
      );
    }
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
        // this.isLoadingBig = false;
      }
    );
  }
}
