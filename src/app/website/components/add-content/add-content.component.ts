import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css'],
})
export class AddContentComponent {
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
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    // get all courses
    this.getAllCourses();
  }

  handelSubmit(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('videoName', this.model.nameVideo);
      formData.append('video', this.InputVideo.nativeElement.files[0]);
      formData.append('assignmentName', this.model.nameAssignment);
      formData.append(
        'assignment',
        this.InputAssignment.nativeElement.files[0]
      );
      // const newContent = {
      //   video: {
      //     name: this.model.nameVideo,
      //     file: this.InputVideo.nativeElement.files[0],
      //   },
      //   assignment: {
      //     name: this.model.nameAssignment,
      //     file: this.InputAssignment.nativeElement.files[0],
      //   },
      // };
      // console.log(newContent);

      // send request to server
      this.coursesService.addContent(formData, this.model.courseId).subscribe(
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
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // get all courses
  getAllCourses() {
    this.coursesService.getAllCourses().subscribe(
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
