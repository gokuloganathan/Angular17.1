import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../../services/food.service';

export interface addFoodItem{
  id : FormControl<string|null>,
  name : FormControl<string|null>,
  price: FormControl<number|null>,
  category : FormControl<string|null>,
}

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css',
})
export class AddFoodComponent {
  constructor(private foodService: FoodService){}

  addNewFood = new FormGroup<addFoodItem>({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
  });

  onAddingFood(){
    // this.foodService.addNewFood(this.addNewFood.value)
  }

}
