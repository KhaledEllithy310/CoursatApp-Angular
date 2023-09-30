import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyLearningService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/';

  showMyLearning(): Observable<any> {
    return this.http.get(`${this.baseUrl}students/showMyLearning/`);
  }
}
