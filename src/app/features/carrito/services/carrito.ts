import { Injectable } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
  private carritoProductos: Producto[] = [];

  private _productos: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  constructor() {}

  get productos() {
    console.log('get productos:' + this._productos);
    return this._productos.asObservable();
  }
  agregarProducto(producto: Producto) {
    this.carritoProductos.push(producto);
    this._productos.next(this.carritoProductos);
    console.log('servicio agregarProducto()' + this._productos);
  }
}
