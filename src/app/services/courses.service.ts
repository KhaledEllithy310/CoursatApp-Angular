import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl = 'http://localhost:3000/';
  isLogin = false;
  userType = 'student';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}instructors/showCourses`);
  }

  getAllCoursesAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}admin/showAllCourses`);
  }

  addCourse(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}instructors/addCourse`, data);
  }

  addContent(data: any, courseId: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}instructors/addContent/${courseId}`,
      data
    );
  }

  getCourseById(courseId: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}instructors/showCourseById/${courseId}`
    );
  }
}
