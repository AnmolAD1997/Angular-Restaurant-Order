import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {path:'menu',component: MenuComponent,title:"Menu"},
  {path:'order',component: OrderComponent,title:"Order"},
  {path:'checkout',component: CheckoutComponent,title:"Checkout"},
  {path:'home',component:HomeComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
