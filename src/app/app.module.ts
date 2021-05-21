import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { Lab1Component } from './components/lab1/lab1.component';
import { Lab2Component } from './components/lab2/lab2.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/lab2/product/product.component';
import { Lab3Component } from './components/lab3/lab3.component';
import { Lab4Component } from './components/lab4/lab4.component';
import { Lab4ProductComponent } from './components//lab4/lab4-product/lab4-product.component';
import { DetailProductComponent } from './components/lab4/detail-product/detail-product.component';


import { StarComponent } from './components/lab3/star/star.component';
import {Route} from './routes.module'
//module
import {RouterModule} from '@angular/router';
import { Lab5Component } from './components/lab5/lab5.component';
import { ReactiveformComponent } from './components/lab5/reactiveform/reactiveform.component';
import { TempalteformComponent } from './components/lab5/tempalteform/tempalteform.component';
import { Lab6Component } from './components/lab6/lab6.component'

@NgModule({
  declarations: [
    AppComponent,
    Lab1Component,
    Lab2Component,
    HeaderComponent,
    ProductComponent,
    Lab3Component,
    StarComponent,
    Lab4Component,
    Lab4ProductComponent,
    DetailProductComponent,
    Lab5Component,
    ReactiveformComponent,
    TempalteformComponent,
    Lab6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Route),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
