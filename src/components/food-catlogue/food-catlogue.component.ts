import { Component, Injector, Signal, computed, effect, signal } from '@angular/core';
import { AddFoodComponent } from "../../forms/add-food/add-food.component";
import { FoodService } from '../../services/food.service';
import { Food } from '../../modal/food';
import { Cart } from '../../modal/cart';

@Component({
  selector: 'app-food-catlogue',
  standalone: true,
  templateUrl: './food-catlogue.component.html',
  styleUrl: './food-catlogue.component.css',
  imports: [AddFoodComponent],
})
export class FoodCatlogueComponent {
  constructor(private foodService: FoodService,private injector: Injector) {}

  addNewFood() {
    this.foodService.addNewFood({
      id: `${Math.floor(Math.random() * 1000 - 1)}`,
      name: 'pongal',
      price: 50,
      category: 'tiffin/breakfast',
    });
  }

  cartlist!:Cart[]

  signalizedCartList = signal(this.cartlist);
  // computeCartList=computed(() => this.refreshCart)
  
  refreshCart = effect(() => {
    console.log(`new cart list is here`);
    console.log(this.signalizedCartList())
  })
  
  OnRetrivingFood() {
    this.cartlist = this.foodService.getFoods()
    this.signalizedCartList.set(this.cartlist);
    // console.log(this.cartlist);
  }

  increase(index: number, id: string) {
    this.cartlist
      .filter((item) => item.id === id)
      .map(
        (item) =>
          item.quantity = (item?.quantity != undefined ) ? (item?.quantity + 1) : 1
      );

    // this.cartlist[index].quantity 

    this.signalizedCartList.update(() => this.cartlist);
  }
  
  decrease(index: number, id: string) {
    this.cartlist
      .filter((item) => item.id === id)
      .map(
        (item) =>
          item.quantity = (item?.quantity != undefined) ? ((item?.quantity >= 1) ? (item?.quantity - 1) : 0) : 0
      );
    
    this.signalizedCartList.update(() => this.cartlist)
  }
}


/* 


      id:1,
      name:"idly",
      price:35,
      category:"tiffin/breakfast"


      id:2,
      name:"dosa",
      price:80,
      category:"tiffin/breakfast"


          this.cartlist
      .filter((item) => item.id === id)
      .map(
        (item) =>
          item.quantity = (item?.quantity != undefined ) ? (item?.quantity + 1) : 0
      );

    this.cartlist
      .filter((item) => item.id === id)
      .map(
        (item) =>
          item.quantity = (item?.quantity != undefined) ? ((item?.quantity >= 1) ? (item?.quantity - 1) : 0) : 0
      );

*/
