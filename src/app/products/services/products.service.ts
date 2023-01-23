import { Product } from './../../product';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  item:any
  getAllProducts(){
    return this.http.get<Product[]>("https://fakestoreapi.com/products")

  }
  getAllCategories(){
    return this.http.get<any>("https://fakestoreapi.com/products/categories")

  }
  getProductsByCategories(category:string){
    return this.http.get<any>(`https://fakestoreapi.com/products/category/${category}`)

  }
  getProductDetials(id:number){
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)

  }
}
