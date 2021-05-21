import { Lab1Component } from './components/lab1/lab1.component';
import { Lab2Component } from './components/lab2/lab2.component';
import { Lab3Component } from './components/lab3/lab3.component';
import { Lab4Component } from './components/lab4/lab4.component';
import { Lab4ProductComponent } from './components//lab4/lab4-product/lab4-product.component';
import { DetailProductComponent } from './components/lab4/detail-product/detail-product.component';
import { Lab5Component } from './components/lab5/lab5.component';
import { ReactiveformComponent } from './components/lab5/reactiveform/reactiveform.component';
import { TempalteformComponent } from './components/lab5/tempalteform/tempalteform.component'
import { Lab6Component } from './components/lab6/lab6.component'

import {Routes} from '@angular/router'


export const Route : Routes = [
    {
        path : '', 
        component : Lab1Component
    },
    {
        path : 'lab2', 
        component : Lab2Component
    },
    {
        path : 'lab3', 
        component : Lab3Component
    },
    {
        path : 'lab4', 
        component : Lab4Component,
        children : [
            {
                path : '', 
                component :Lab4ProductComponent 
            },
            {
                path : 'product/:id',
                component :DetailProductComponent
            }
        ]
    },
    {
        path : 'lab5', 
        component : Lab5Component,
        children : [
            {
                path : 'template-form', 
                component :TempalteformComponent 
            },
            {
                path : 'reactive-form',
                component :ReactiveformComponent
            }
        ]
    },
    {
        path : 'lab6', 
        component : Lab6Component
    }
]