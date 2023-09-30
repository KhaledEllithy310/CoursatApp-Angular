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

  getMyCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}instructors/showCourses`);
  }

  getAllCoursesPublish(): Observable<any> {
    return this.http.get(`${this.baseUrl}admin/showAllCoursesPublish`);
  }

  getAllCoursesPending(): Observable<any> {
    return this.http.get(`${this.baseUrl}admin/showAllCoursesPending`);
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

  editContent(data: any, contentId: any): Observable<any> {
    return this.http.patch(
      `${this.baseUrl}instructors/editContent/${contentId}`,
      data
    );
  }

  getCourseById(courseId: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}instructors/showCourseById/${courseId}`
    );
  }

  showCourseByIdForStudents(courseId: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}instructors/showCourseByIdForStudents/${courseId}`
    );
  }
}
