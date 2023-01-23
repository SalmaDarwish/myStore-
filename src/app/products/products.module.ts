import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from "../shared/shared.module";
import { ItemComponent } from './components/item/item.component';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ItemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],exports:[
        AllProductsComponent,
        ItemComponent,
        ProductDetailsComponent
      
      ]
})
export class ProductsModule { }
