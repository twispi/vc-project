import { Injectable } from '@angular/core';
// import { Todo } from './todo';
import { CompanyDataService } from '../../core/services/company-data.service';
import { Observable } from 'rxjs';


@Injectable()
export class CompanyCollectionService {

  constructor(
    private api: CompanyDataService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: any): Observable<any> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<any> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: any): Observable<any> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<any[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<any> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: any) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}