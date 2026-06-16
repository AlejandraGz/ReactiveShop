import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../services/carrito';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { ItemCarrito } from '../../models/carrito.model';


@Component({
  selector: 'app-sidebar-carrito',
  imports: [CurrencyPipe, AsyncPipe, RouterLink, MatIcon],
  templateUrl: './sidebar-carrito.html',
  styleUrls: [
    './sidebar-carrito.css',
    '../../../../../styles/_variables.css'
  ]
})
export class SidebarCarrito {
  productos$;
  total$;
  cantidadProductos$;

  constructor(
    private carritoService: Carrito
  ) {
    this.total$ = carritoService.total$;
    this.cantidadProductos$ = carritoService.cantidadProductos$;
    this.productos$ = carritoService.productos;
  }

  borrarProductoCarrito(producto: Producto) {
    this.carritoService.borrarProducto(producto)
  }

  cantidadProducto(opcion: string, producto: Producto) {
    if(opcion === 'sumar'){
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