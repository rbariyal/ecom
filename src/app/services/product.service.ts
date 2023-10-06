import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  cartObj:any[]=[];
  constructor(private http:HttpClient, private toastr:ToastrService) {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }
   getAllProducts(): Observable<any[]>
   {
   
return this.http.get<any[]>("https://fakestoreapi.com/products")
   }
   myMethod(data:any) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);
}
showSuccess(message:any, title:any){
  this.toastr.success(message, title)
}
 
}
