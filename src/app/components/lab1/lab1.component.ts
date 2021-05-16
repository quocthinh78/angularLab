import { Component, OnInit } from '@angular/core';
import {Inventor, IProduct} from "../../interface/lab1";

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css']
})

export class Lab1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public student ={
    name : "vo quoc thinh",
    gioitinh : "Nam",
    ngaysinh : "4/7/2000",
    anh : "assets/poly.jpeg",
    diem : 7
  }
   public inventors : Inventor[] = [
    {id : 1 , first : "Campus" , last : "Sin" , year : 1500 , passed : 1567},
    {id : 2 , first : "Anbert" , last : "ST" , year : 1800 , passed : 1900},
    {id : 3 , first : "NeBidon" , last : "Calouns" , year : 1800 , passed : 1900},
    {id : 4 , first : "Josn" , last : "Style" , year : 1680 , passed : 1770},
    {id : 5 , first : "Jax" , last : "Pass" , year : 1460 , passed : 1560}
  ]
  public products: IProduct[]=[
    {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2016",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2015",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
      
  show(){
    let str = <HTMLInputElement> document.querySelector('#inventor');
    let strs : string = "";
    this.inventors.map(inventor=>{
    strs += `<tr>
    <td>${inventor.id}</td>
    <td>${inventor.first}</td>
    <td>${inventor.last}</td>
    <td>${inventor.year}</td>
    <td>${inventor.passed}</td>
    </tr>`;
    });
    console.log(str)
    str.innerHTML = strs;
  }
  // public result = this.render();
  // show(this.result)
  // shows(this.result:any){
  //   let dom = <HTMLInputElement> document.querySelector('#inventor');
  //   dom.innerHTML = this.result;
  // }

  // render() {
  //   let strs : string = "";
  //   this.inventors.map((inventor : any)=>{
  //   strs += `<tr>
  //   <td>${inventor.id}</td>
  //   <td>${inventor.first}</td>
  //   <td>${inventor.last}</td>
  //   <td>${inventor.year}</td>
  //   <td>${inventor.passed}</td>
  //   </tr>`
  //   })
  //   return strs;
  // }

  showProduct(){
    let str = <HTMLInputElement> document.querySelector('#product');
    let strs : string = "";
    this.products.map(inventor=>{
    strs += `<tr>
    <td><img style="width : 50px" src="${inventor.imageUrl}"></td>
    <td>${inventor.productName}</td>
    <td>${inventor.productCode}</td>
    <td>${inventor.releaseDate}</td>
    <td>${inventor.price}</td>
    <td>${inventor.starRating}</td>
    </tr>`;
    });
    console.log(str)
    str.innerHTML = strs;
  }

  

  
}
