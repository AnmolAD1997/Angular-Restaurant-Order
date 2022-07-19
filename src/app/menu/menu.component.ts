import { Component, OnInit, Input } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {

  menues:Menu[]=[];
  food:Menu[]=[]
  selected:number=0;

  @Input() item:boolean = true;

  getMenues():void{
    this.menues=this.menuService.getMenu();

  }

   
 
 

 changeVal(selectedItems:Menu){

this.menuService.setOrder(selectedItems);
console.log(this.menuService.getOrder());
this.selected=this.menuService.getOrder().length;

 }

  constructor(private menuService:MenuService) { }


  ngOnInit(): void {

this.getMenues();
  this.food=this.menues;

  }

}
