import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // baseUrl = 'http://localhost:3000/';
  baseUrl = 'https://coursatk-server.onrender.com/';
  isLogin = false;
  userType = 'student';

  constructor(private http: HttpClient) {}


  getAllCategory(): Observable<any> {
    return this.http.get(`${this.baseUrl}admin/showAllCategories`);
  }

  // getAllCategory(): Observable<any> {
  //   let token = localStorage.getItem('token');
  //   let headers = new HttpHeaders().set('Authorization', `${token}`);
  //   return this.http.get(`${this.baseUrl}admin/showAllCategories`, { headers });
  // }
}
