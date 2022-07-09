import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-todos',
  templateUrl: './get-todos.component.html',
  styleUrls: ['./get-todos.component.css'],
})
export class GetTodosComponent implements OnInit {
  userId: number;

  constructor(private http: HttpClient) {}

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  todos: Observable<any>;

  getTodos() {
    let params = new HttpParams().set('userId', this.userId);
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.todos = this.http.get(this.ROOT_URL + '/todos', { params, headers });
  }

  ngOnInit(): void {}
}
