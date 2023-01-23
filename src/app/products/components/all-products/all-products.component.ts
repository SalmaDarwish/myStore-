import { Product } from './../../../product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  products:Product[]=[]
  categories:string[]=[]
  loading:boolean=false
  cart:any[]=[]
constructor(private service:ProductsService){}

ngOnInit():void{
  this.getProducts()
  this.getCategories()
}
getProducts(){
  this.loading=true
  this.service.getAllProducts().subscribe(res=>{
    this.products= res
    this.loading=false
    console.log(this.products)
  },err=>{
    alert("There is an Error")
  }
  )
}
getCategories(){
  
  this.service.getAllCategories().subscribe(res=>{
    this.categories= res
    console.log(this.categories)
  },
  err=>{
    console.log(err.message)
  })
}
filterProducts(event:any){
  let category=event.target.value
  console.log(category)
  if(category=="All"){
    this.getProducts()
  }else{
  this.service.getProductsByCategories(category).subscribe((res:any)=>{
    this.products=res
  })
}
}
addToCart(event:any){
  console.log(event)
  if("cart" in localStorage ){
    this.cart=JSON.parse(localStorage.getItem("cart")!)
    let exist=this.cart.find(item=>item.item.id==event.item.id)
    if(exist){
      alert("Product is already added to your cart")
    }else{
          this.cart.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cart))
    }

  }else{
  this.cart.push(event)
localStorage.setItem("cart",JSON.stringify(this.cart))
  }

  
}
}
