import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { CategoriesService } from './../../../services/categories.service';
import { CoursesService } from './../../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  @ViewChild('inputImage', { static: false }) inputImage!: ElementRef;

  userData = localStorage.getItem('userData');
  currentUser = this.userData ? JSON.parse(this.userData) : null;
  categories: any[] = [];
  model = {
    name: '',
    price: '',
    description: '',
    firstName: '',
    categoryId: '',
    instructorId: this.currentUser._id,
  };

  constructor(
    private categoriesService: CategoriesService,
    private coursesService: CoursesService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
      // get All Categories
    this.getAllCategory();
  }
  
  // Add Course
  addCourse(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', this.model.name);
      formData.append('description', this.model.description);
      formData.append('price', this.model.price);
      formData.append('categoryId', this.model.categoryId);
      formData.append('image', this.inputImage.nativeElement.files[0]);
      // send request to server
      this.coursesService.addCourse(formData).subscribe(
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

  // get All Categories
  getAllCategory() {
    this.categoriesService.getAllCategory().subscribe(
      (res) => {
        if (res.apiStatus) this.categories = res.data;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
