import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './body/register/register.component';
import {LoginComponent} from './body/login/login.component';
import {ListProductsComponent} from './body/list-products/list-products.component';
import {BagComponent} from './body/bag/bag.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PrimeIcons, PrimeNGConfig, PrimeTemplate} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ListProductsComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    PrimeIcons,
    PrimeTemplate,
    PrimeNGConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
