import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {

  constructor(){
    // effect(() => {
    //   console.log(`${this.signalArr()}`);
    // });
  }
  changeableVal = new FormControl()
  

  arr:number[] = [1, 2, 3, 4, 5];
  signalArr : WritableSignal<number[]> = signal(this.arr);
  refreshArr = computed(() => {
    if(this.signalArr()){
      console.log(this.signalArr());
      return this.signalArr();
    }else{
      console.log('no values present');
      return 'no values present'
    }
  })

  insert() {
    this.arr.push(this.changeableVal.value)
    this.signalArr.update(() => this.arr)
    // this.signalArr.update(() => [...this.signalArr(),this.changeableVal.value]);
  }

  remove(){
    this.arr = this.arr.filter(elem => elem !== this.changeableVal.value);
    this.signalArr.update(() => this.arr);
  }
}
