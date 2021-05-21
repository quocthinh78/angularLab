import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  public productForm : any;
  ngOnInit(): void {
    this.validForm();
  }
  validForm(){
    this.productForm  = new FormGroup({
      name : new FormControl(null , [Validators.required, Validators.minLength(6)]),
      code : new FormControl(null ,[Validators.required, Validators.minLength(6)]),
      description : new FormControl(null ,[Validators.required, Validators.minLength(6)]),
      price : new FormControl(null ,[Validators.required, Validators.max(10) , Validators.min(5)]),
      raiting : new FormControl(null,[Validators.required, Validators.max(5) , Validators.min(0)]),
      image : new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log((this.productForm))
  }
}
