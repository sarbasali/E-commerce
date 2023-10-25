import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public products :any=[]
b: any;
  constructor(private cartService:CartService){}  
  ngOnInit(): void {
    this.products=this.cartService.cartItems
    this.TotalAmt=this.cartService.TotalAmt

  }
  removecart(i:any){
    this.cartService.removeCart(i)
  }
  TotalAmt(){
    this.cartService.TotalAmt()
  }
  lessQnt(q:any){
   q.quantity -= 1
   q.cartprice -= q.price
  }
  addQnt(q:any){
    q.quantity += 1
    q.cartprice = q.quantity* Number(q.price)
    
  }
}
