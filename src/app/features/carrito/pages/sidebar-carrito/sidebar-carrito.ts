import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../services/carrito';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { ItemCarrito } from '../../models/carrito.model';


@Component({
  selector: 'app-sidebar-carrito',
  imports: [CurrencyPipe, RouterLink, MatIcon],
  templateUrl: './sidebar-carrito.html',
  styleUrls: [
    './sidebar-carrito.css',
    '../../../../../styles/_variables.css'
  ]
})
export class SidebarCarrito implements OnInit {
  productos: ItemCarrito[] = [];
  cantidad: number = 0;
  totalCarrito: number = 0;
  constructor(
    public carritoService: Carrito
  ) { }

  ngOnInit() {
    console.log('PaginaCarrito iniciado');
    this.carritoService.productos.subscribe(p => {
      this.productos = p;
    });
  }
  borrarProductoCarrito(producto: Producto) {
    this.carritoService.borrarProducto(producto)
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}