import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:any[]=[];
  cartObj:any[]=[];

constructor(private productService:ProductService ,private router:Router) //dependency injection
{

}
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
productClick(productId:number)
{
console.log("Product is clicked");
const data=this.productList.filter(object=>
  {
    return object['id']==productId
  })
  this.router.navigateByUrl("/item",{state:data});
}
}
