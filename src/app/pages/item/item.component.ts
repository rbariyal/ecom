import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  productList:any[]=[];
  cartObj:any[]=[];
  cartProducts:any;
  public data: any;
  subTotal: number = 0;
  neededArray = [];
  ngOnInit(): void {
    this.loadAllProducts();
  }
  loadAllProducts()
  {
    this.productService.getAllProducts().subscribe((result:any)=>
    {
  this.productList=result;
  console.log(result);
    })
  }
  constructor(private router:Router,private productService:ProductService)
  {
this.cartProducts=this.router.getCurrentNavigation()?.extras.state;
this.cartProducts=this.cartProducts[0];
console.log(this.cartProducts )

  }
  addItemToCart(productId:number)
{
  console.log("add to cart")
const result=this.productList.filter(
  object=>{
    return object['id']==productId
  }

);
this.cartObj.push(result);
console.log(this.cartObj);
this.productService.myMethod(this.cartObj)
this.productService.showSuccess("Success","Product added successfully")
}
}
