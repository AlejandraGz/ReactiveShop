import { Injectable } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrito } from '../models/carrito.model';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
  private carritoProductos: ItemCarrito[] = [];

  private _productos: BehaviorSubject<ItemCarrito[]> = new BehaviorSubject<ItemCarrito[]>([]);

  constructor() { }

  get productos() {
    return this._productos.asObservable();
  }

  agregarProducto(producto: Producto) {
    const itemCarrito = this.carritoProductos.find(p => p.producto.id === producto.id);

    if (itemCarrito) {

      if (itemCarrito.cantidad < producto.stock) {
        itemCarrito.cantidad++;
      }

    } else {

      this.carritoProductos.push({
        producto,
        cantidad: 1
      });

    }
    this._productos.next(this.carritoProductos);
  }
  restarCantidadProducto(producto: Producto) {
    const itemCarrito = this.carritoProductos.find(p => p.producto.id === producto.id);

    if (!itemCarrito) return;

    itemCarrito.cantidad--;

    if (itemCarrito.cantidad <= 0) {
      this.carritoProductos = this.carritoProductos.filter(p => p.producto.id !== producto.id)
    }
    this._productos.next(this.carritoProductos);
  }
  borrarProducto(producto: Producto) {
    this.carritoProductos = this.carritoProductos.filter(p => p.producto !== producto);
    this._productos.next(this.carritoProductos);
  }
  totalCarrito() {
      return this.carritoProductos.reduce(
        (total, item) => total + item.producto.precio * item.cantidad, 0
      )
  }
  totalCantidadProductos() {
    return this.carritoProductos.reduce(
      (total, item) => total + item.cantidad, 0
    )
  }
}
