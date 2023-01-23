import { CartsService } from './../../services/carts.service';
import { Product } from 'src/app/product';
import { Component} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cartProducts:any
total:number=0
success:boolean=false
constructor(private service:CartsService){
  this.getCartProducts()

}

getCartProducts(){
  if("cart" in localStorage){
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
    
  }
  this.getTotalPrice()

  console.log(this.cartProducts)
}
getTotalPrice(){
this.total=0
for(let i in this.cartProducts){
  this.total+=Math.floor(this.cartProducts[i].item.price * this.cartProducts[i].quantity)  
}
}
decreaseAmount(index:number){
  if(this.cartProducts[index].quantity>0){
    this.cartProducts[index].quantity--
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }

}
increaseAmount(index:number){
  this.cartProducts[index].quantity++
  this.getTotalPrice()

  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

}
getTotal(){
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  this.getTotalPrice()
}
deleteProduct(index:number){
this.cartProducts.splice(index,1)
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getTotal()
}
addCart(){
  let products=this.cartProducts.map((product: { item: { id: any; }; quantity: any; })=>{
   return {productId:product.item.id, quantity:product.quantity}
  })
  let userData={
    userId:5,
    date:new Date(),
    products:products
  }
  console.log(userData)
  this.service.createCart(userData).subscribe(res=>{
    this.success=true
  })
}
}
