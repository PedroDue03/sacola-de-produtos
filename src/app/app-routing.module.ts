import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductsComponent} from "./body/list-products/list-products.component";
import {RegisterComponent} from "./body/register/register.component";
import {LoginComponent} from "./body/login/login.component";
import {BagComponent} from "./body/bag/bag.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-product',
    pathMatch: "full"
  },
  {
    path: 'list-product',
    component: ListProductsComponent
  },
  {
    path: 'bag',
    component: BagComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
