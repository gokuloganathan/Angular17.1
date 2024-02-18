import { Component, Injector, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { log } from 'console';
import { LocalstoreService } from '../../service/localstore.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  
  count = signal(0);
  doublecount : Signal<number> = computed(() => this.count() * 2)
  constructor(private injector: Injector,private localService:LocalstoreService){
    effect(() => {
      console.log('checking the double count value', this.doublecount());
    });
  }

  setSignal(){
    const count = signal(0); //it is  writableSignal
    console.log('Count is ',count());

    count.set(3);
    console.log('Count is ',count());
    
    count.update(val => val + 1)
    console.log('count is ',count());
    
    //computed signal that runs every time when there is chnages in count()
    //if no changes in count() displays the last computed value cached instead of recalculating\

    const doublecount : Signal<number> = computed(() => count() * 2);

    count.set(10);
    

    this.count.set(10);
    // localStorage.setItem('count',doublecount())
    // this.str.localStorage.setItem("val1",`${doublecount()}`)

    this.localService.setCount(doublecount());
  }

  getSIgnal():any{
    console.log(this.localService.getItem('data'));
  }
}


