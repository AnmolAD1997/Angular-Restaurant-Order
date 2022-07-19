import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';


import {MenuComponent} from '../menu/menu.component'
 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


orderedItem:Menu[]=[];





  constructor( private menuService:MenuService ) { }

  ngOnInit(): void {

  this.orderedItem=this.menuService.getOrder();

  

  }

  orderNow(){

    
    alert("Order Placed!! You can Checkout now!!");
    this.menuService.transferOrder();

    this.menuService.clearOrder();


  }

  clearOrder(){

    alert("Order Cleared!! Choose new Order!!");

    this.menuService.clearOrder();
    

  }

}
