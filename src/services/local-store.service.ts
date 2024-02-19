import { Injectable } from '@angular/core';
import { Food } from '../modal/food';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  updateDataForKey(key: string,data:any){
    //console.log([...this.getAllDataForKey(key), data]);
    let updatatedData = [...this.getAllDataForKey(key), data];
    localStorage.setItem(key,JSON.stringify(updatatedData));
  }

  getAllDataForKey(key: string):any{
    let resp = localStorage.getItem(key);

    let jsonresp =(resp === "")? [] : JSON.parse(`${resp}`);
    // return [...jsonresp,{id:1,name:'demo'}];
    return jsonresp;
  }
}
