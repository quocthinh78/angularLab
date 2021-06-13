import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interface/lab6'
import {Lab6Service} from "../../service/lab6.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {
  subscription : Subscription = new Subscription();
  public todos : Todo[] = [];
  constructor(
    public todoService : Lab6Service,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  isFormAdd : boolean = true;
  product : Todo = new Todo();
  loadData(){
    this.subscription = this.todoService.getAllProduct().subscribe(product=>{
      this.todos = product;
      console.log(product);
    })
  }
  addTodo(){
    let todo = new Todo(Date.now() , this.product.name , this.product.des);
    this.subscription = this.todoService.addTodo(todo).subscribe(data=> {
      this.todos.push(data);
    })
  }
  editTodo(item : Todo){
    this.isFormAdd = false;
    this.product = item;
  }
  onUpdate(){
    this.subscription = this.todoService.update(this.product).subscribe(data=>{
      console.log(this.product)
      let i = this.getIndex(data.id);
      this.todos[i] = data;
    })
  }
  getIndex(id : number){
    let index = 0;
    this.todos.forEach((item , i)=>{
      if(item.id == id){
        index =  i;
      }
    })
    return index;
  }
  deleteTodo(id : number){
    this.subscription = this.todoService.delete(id).subscribe(data=> {
      let i = this.getIndex(id);
      this.todos.splice(i , 1);
    })
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
