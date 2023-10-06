
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  cartProducts:any;
  public data: any;
  subTotal: number = 0;
  
  constructor(private router:Router)
  {
this.cartProducts=this.router.getCurrentNavigation()?.extras.state;
console.log(this.cartProducts)
  }

}
