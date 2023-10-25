import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
{path:'',
redirectTo:'/login',
pathMatch:'full'
},
  {path:'home',component:ShoppingComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductsComponent},
  {path : 'cart',component:CartComponent},
  {path : 'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






