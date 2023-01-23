import { Product } from './../../../product';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
@Input() product:any={}
@Output() item=new EventEmitter()
addButton:boolean=false
amount:number=1

add(){
  this.item.emit({item:this.product , quantity:this.amount})
  this.addButton=false

}
}
