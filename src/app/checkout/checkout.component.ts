import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderedItem:Menu[]=[];
  totalBill:number=0;






  

  ngOnInit(): void {

  this.orderedItem=this.menuService.getFinalOrder();
  this.orderedItem.forEach(element => {
    this.totalBill=element.price+this.totalBill;
    
  });
  console.log(this.orderedItem)

  

  }

 payNow(){

  alert("Thanks Please visit us again!!");
  this.menuService.clearFinalOrder();


  }

  

  

  constructor(private menuService:MenuService ) { }


}
