import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://localhost:3000/';
  isLogin = false;
  userType = localStorage.getItem('type');
  Data = localStorage.getItem('userData');
  userData = this.Data ? JSON.parse(this.Data) : null;

  constructor(private http: HttpClient) {}

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/login`, data);
  }

  registerStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}students/add`, data);
  }

  uploadImage(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/uploadImage`, data);
  }

  editProfile(data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}users/editProfile`, data);
  }

  showProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}users/showProfile`);
  }

  logOut(): Observable<any> {
    // localStorage.removeItem('token');
    // localStorage.removeItem('userData');
    // localStorage.removeItem('type');
    return this.http.post(`${this.baseUrl}users/logout`, null);
  }

  logOutAll(): Observable<any> {
    return this.http.post(`${this.baseUrl}users/logOutAll`, null);
  }
}
