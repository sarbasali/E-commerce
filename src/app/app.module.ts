import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ShoppingComponent } from './shopping/shopping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './payment/payment.component';
import { MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PopupComponent } from './popup/popup.component'; 
// import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    CartComponent,
    ShoppingComponent,
    PaymentComponent,
    PopupComponent,
    
    // PaymentComponent,
  

   
  ],

  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CarouselModule ,
    MatSnackBarModule,
   
    
  
    // CarouselModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
