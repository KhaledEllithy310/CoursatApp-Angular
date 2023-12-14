import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  countCoursesInCart: any = 0;
  // baseUrl = 'http://localhost:3000/';
  baseUrl = 'https://coursatk-server.onrender.com/';

  addToCart(courseId: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}students/addToCart/${courseId}`,
      null
    );
  }

  addToWishList(courseId: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}students/addToWishList/${courseId}`,
      null
    );
  }

  showMyCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}students/showCart/`);
  }

  deleteCourseFromCart(courseId: any): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}students/deleteFromCart/${courseId}`
    );
  }

  //checkout
  addToMyLearning(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}students/addToMyLearning`, data);
  }
}
