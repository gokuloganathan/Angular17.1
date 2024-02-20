import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstoreService {
  constructor() {}

  setCount(val: number) {
    // localStorage.setItem('data', JSON.stringify(arr));
  }

  getItem(data:string):any{
    return localStorage.getItem(data);
  }
}


/* 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstoreService {
  constructor() {}

  setCount(val: number) {
    let data = {
      product: 'tomato',
      price: val,
    };
    let arr = [data, data];
    localStorage.setItem('data', JSON.stringify(arr));
  }

  getItem(data:string):any{
    const resp = localStorage.getItem(data);
    return resp;
  }
}

*/