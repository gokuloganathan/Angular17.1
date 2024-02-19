import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Food } from '../modal/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private localStoreService:LocalStoreService) { }

  addNewFood(food:Food) {
    return this.localStoreService.updateDataForKey("catlogue",food);
  }

  getFoods(){
    return this.localStoreService.getAllDataForKey('catlogue');
  }
}
