import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-tempalteform',
  templateUrl: './tempalteform.component.html',
  styleUrls: ['./tempalteform.component.css']
})
export class TempalteformComponent implements OnInit {
  public user = {
    name : '',
    pass : ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    if(!form.invalid){
      console.log(form.value)
    }
  }
  
}
