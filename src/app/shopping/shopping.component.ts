import { Component ,DoCheck,NgModule, OnInit, isStandalone} from '@angular/core';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})



export class ShoppingComponent  implements DoCheck{

  tottalItem:number=0

  constructor(private CartService:CartService){}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:3500,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  
// signup(){
//     this.Route.navigate(['/Login'])
//   }

  ngDoCheck(): void {
    this.tottalItem = this.CartService.CartCount
  }


}
