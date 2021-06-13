import { Injectable } from '@angular/core';
import {Todo} from '../interface/lab6'
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Lab6Service {
  public API = 'https://60bb025a42e1d00017620336.mockapi.io/react/api/products'
  constructor(
    public http : HttpClient
  ) { }
  addTodo(toto : Todo) : Observable<any>{
    return this.http.post(this.API , toto);
  }
  update(todo : Todo) : Observable<any>{
    return this.http.put(`${this.API}/${todo.id}` , todo)
  }
  delete(id : number) : Observable<any>{
    return this.http.delete(`${this.API}/${id}`)
  }
  getAllProduct() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }
}
