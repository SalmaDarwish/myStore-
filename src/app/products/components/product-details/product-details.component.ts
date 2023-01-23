import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
id!:any
product:any={}
loading:boolean=true
  constructor(private route:ActivatedRoute, private service:ProductsService){
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.getProductDetails()
  }
  getProductDetails(){
    this.loading=true
    this.service.getProductDetials(this.id).subscribe(res=>{
this.product=res
console.log(this.product)
this.loading=false
    },error=>{
      this.loading=false
      alert(error)
    })
  }

}
