import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private http: HttpClient) {}
  // baseUrl = 'http://localhost:3000/';
  baseUrl = 'https://coursatk-server.onrender.com/';
  showMyWishList(): Observable<any> {
    return this.http.get(`${this.baseUrl}students/showWishList/`);
  }
}
