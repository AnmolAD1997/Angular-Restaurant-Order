import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENUES } from './mock-menues';
import { selectedOrder } from './mock-menues';
import { finalOrder } from './mock-menues';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu():Menu[]{
    return MENUES;
  }

  setOrder(selectedItems:Menu):void{

selectedOrder.push(selectedItems);

  }

  getOrder():Menu[]{

    return selectedOrder;
    
  }

  clearOrder():void{

    selectedOrder.length=0;

  }

  transferOrder():void{

finalOrder.push(...selectedOrder);

  }

  getFinalOrder():Menu[]{

    return finalOrder;
  }

  clearFinalOrder(){

    finalOrder.length=0;

  }

}
