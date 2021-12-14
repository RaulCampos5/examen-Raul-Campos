import { EventEmitter, Injectable, Output } from '@angular/core';
import { Item } from '../models/item.module';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public carrito: Item[];
@Output() change: EventEmitter<Item[]> = new EventEmitter();
constructor() { 
  this.carrito = [];
}
addProduct(idProducto: string, cantidad: number) {
  let nuevo: Item = {idProducto,cantidad};
  this.carrito.push(nuevo);
  this.change.emit(this.carrito);
}
}
