import { CartsModule } from './../carts/carts.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { Product } from '../product';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CartsModule

  ]
  ,exports:[
    HeaderComponent,
    SpinnerComponent,
    FormsModule,
  ]
})
export class SharedModule { }
