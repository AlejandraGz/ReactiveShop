import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../services/carrito';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { ItemCarrito } from '../../models/carrito.model';


@Component({
  selector: 'app-pagina-carrito',
  imports: [CurrencyPipe, RouterLink, MatIcon],
  templateUrl: './pagina-carrito.html',
  styleUrls: [
    './pagina-carrito.css',
  ]
})
export class PaginaCarrito implements OnInit {
  productos: ItemCarrito[] = [];
  constructor(
    private carritoService: Carrito
  ) { }

  ngOnInit() {
    console.log(this.productos);
    this.carritoService.productos.subscribe(p => {
      this.productos = p;
    });
  }
  borrarProductoCarrito(producto: Producto) {
    this.carritoService.borrarProducto(producto)
  }

  totalCarrito() {
    return this.carritoService.totalCarrito()
  }
  totalCantidadProductos(){
    return this.carritoService.totalCantidadProductos();
  }
  cantidadProducto(opcion: string, producto: Producto) {
    if (opcion === 'sumar') {
      this.carritoService.agregarProducto(producto)
    } else {
      this.carritoService.restarCantidadProducto(producto)
    }
  }
  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}