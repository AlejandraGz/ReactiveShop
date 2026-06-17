import { Injectable } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { BehaviorSubject, map } from 'rxjs';
import { ItemCarrito } from '../models/carrito.model';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
  private carritoProductos: ItemCarrito[] = [];

  private _productos: BehaviorSubject<ItemCarrito[]> = new BehaviorSubject<ItemCarrito[]>([]);

  constructor() {
    const productosGuardados = localStorage.getItem('Productos');
    if (productosGuardados) {
      this.carritoProductos = JSON.parse(productosGuardados);
      this._productos.next(this.carritoProductos);
    }
  }
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
    this.actualizarCarrito();
  }
  restarCantidadProducto(producto: Producto) {
    const itemCarrito = this.carritoProductos.find(p => p.producto.id === producto.id);

    if (!itemCarrito) return;

    itemCarrito.cantidad--;

    if (itemCarrito.cantidad <= 0) {
      this.carritoProductos = this.carritoProductos.filter(p => p.producto.id !== producto.id)
    }
    this.actualizarCarrito();
  }
  borrarProducto(producto: Producto) {
    this.carritoProductos = this.carritoProductos.filter(p => p.producto !== producto);
    this.actualizarCarrito();
  }
  limpiarCarrito() {
    this.carritoProductos = [];
    this.actualizarCarrito();
  }
  readonly total$ = this.productos.pipe(
    map(productos =>
      productos.reduce(
        (total, item) => total + item.producto.precio * item.cantidad,
        0
      )
    ));
  readonly cantidadProductos$ = this.productos.pipe(
    map(productos =>
      productos.reduce(
        (total, item) => total + item.cantidad, 0
      )))
  readonly envioGratis$ = this.total$.pipe(
    map(total => total >= 150000)
  );
  readonly faltanteEnvio$ = this.total$.pipe(
    map(total => Math.max(0, 150000 - total))
  );
  private actualizarCarrito() {

    localStorage.setItem('Productos', JSON.stringify(this.carritoProductos));
    this._productos.next(this.carritoProductos);

  }
}
