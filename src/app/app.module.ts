import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {ProductComponent} from "./body/list-products/product/product.component";
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './body/register/register.component';
import {LoginComponent} from './body/login/login.component';
import {ListProductsComponent} from './body/list-products/list-products.component';
import {BagComponent} from './body/bag/bag.component';
import {ApiService} from "./body/utilit/api-service/api.service";
import {QueryCepService} from "./body/utilit/cep-service/query-cep.service";
import {MessageService} from "primeng/api";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        LoginComponent,
        ListProductsComponent,
        BagComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        HttpClientModule,
        RouterModule,
        CardModule,
        ToastModule,
    ],
    providers: [
        HttpClient,
        ApiService,
        QueryCepService,
        MessageService
    ],
    exports: [
        ProductComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
