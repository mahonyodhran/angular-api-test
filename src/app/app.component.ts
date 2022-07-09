import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular API Test';

  constructor(private http: HttpClient) {}

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  todos: Observable<any>;

  getTodos() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.todos = this.http.get(this.ROOT_URL + '/todos', { params, headers });
  }

  ngOnInit(): void {}
}
