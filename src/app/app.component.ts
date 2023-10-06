import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  cartProducts:any[]=[]
  public data: any;
  subTotal: number = 0;
  constructor(private productService:ProductService, private router:Router)
  {
    this.productService.myMethod$.subscribe((data:any) => {
      this.cartProducts = data 
      console.log("mydata",this.cartProducts );
      this.cartProducts.forEach(element => {

 this.subTotal =  this.subTotal + element.price;

    });
  }
);

  }
  redirectToSale() {
    this.router.navigateByUrl("/sale",{state:this.cartProducts});
  }

}
