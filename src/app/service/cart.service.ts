import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: any = [];
 timeout: any
  public productlist: any = new BehaviorSubject<any>([]);
  TotalAmt: any;
  CartCount: number = 0;
  
  constructor() {}

  getProduct() {
    return this.productlist.asObservable();
  }

  setproduct(product: any) {
    this.cartItems.push(...product);
    this.productlist.next(product);
  }

  addtoCart(product: any) {
    product.quantity=1
    product.cartprice=product.price

    if (!this.cartItems.includes(product)) {
      this.cartItems.push(product);
    } else {
      console.log(false);
    }
    this.productlist.next(this.cartItems);
    console.log(this.cartItems);
    this.CartCount = this.cartItems.length;
    // this._snackBar.openFromComponent(PopupComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    // this.timeout=setTimeout(this.alertFunc,1000);

  }
  //  alertFunc() {
  //   alert("add cart successful")
  // }

  getTotalAmt() {
    let grantTotal = 0;
    this.cartItems.map((a: any) => {
      grantTotal += a.total;
    });
  }

  removeCart(product: any) {
    this.cartItems.map((a: any, index: any) => {
      if (product._id === a._id) {
        this.cartItems.splice(index, 1);
      }
    });
  }
  removecart() {
    this.cartItems = [];
    this.productlist.next(this.cartItems);
  }
}


