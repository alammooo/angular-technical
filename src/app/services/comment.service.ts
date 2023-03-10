import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<any> {
    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
  }
}
