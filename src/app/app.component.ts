import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  disable=false;
  


  title = 'CitizenCafe';

alert(){

 alert("Created By Anmol.adhikari@infosys.com");

}
ngOnInit(): void {



}



constructor(private menuService:MenuService){




}


  }
 





