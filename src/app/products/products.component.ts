import { Component, Inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { CartService } from '../service/cart.service';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor( private getapi :ServiceService,private Cartservice:CartService , private _snackBar: MatSnackBar){ }
postArray:any
myApi:any=[]
  public productList : any
  durationInSeconds = 1;
  ngOnInit(){
    this.getapi.getPost().subscribe((res)=>{
     
      this.postArray=res
      console.log(this.postArray);

    this.postArray.forEach((a:any) => {
      Object.assign(a,{quandtity:1,total:a.price})
    });
      
    })
    // this.getapi.getPost().subscribe((res)=>{
      
    // })

    // this.getapi.getMyApi().subscribe((res)=>{
    //   this.myApi=res
    //   console.log(this.myApi);
      
    // })
  }

  openSnackBar(item:any){
    this.Cartservice.addtoCart(item)
    this._snackBar.openFromComponent(PopupComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }



}
