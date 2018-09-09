import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;
interface IToDo {
  "id": number,
  "title": string,
  "complete": boolean
}

class ToDo implements IToDo {
  id: number;
  title: string;
  complete: boolean;
  constructor(todo: ToDo) {
    this.id = todo.id;
    this.title = todo.title;
    this.complete = todo.complete;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  constructor(private http: Http) { }public getAllTodos() {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/todos')
    .pipe(map(response => {
      const todos = response.json();
      return todos.map(todo => Object.create(todo));
    }))
    // .catch(this.handleError);
  }

  // API: POST /todos
  public createTodo(todo: any) {
    // will use this.http.post()
    return this.http
    .post(API_URL + '/todos', todo)
    .pipe(map(response => {
      const todos = response.json();
      return todos.map(todo => Object.create(todo));
    }))
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/todos/' + todoId)
    .pipe(map(response => {
      const todos = response.json();
      return todos.map(todo => Object.create(todo));
    }))
    // .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: any) {
    // will use this.http.put()
      return this.http
        .put(API_URL + '/todos/' + todo.id, todo)
        .pipe(map(response => {
          const todos = response.json();
          return todos.map(todo => Object.create(todo));
        }))
        // .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
      return this.http
        .delete(API_URL + '/todos/' + todoId)
        .pipe(map(response => {
          const todos = response.json();
          return todos.map(todo => Object.create(todo));
        }))
  }
}

