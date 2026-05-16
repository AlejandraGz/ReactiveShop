import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../services/carrito';

@Component({
  selector: 'app-sidebar-carrito',
  imports: [],
  templateUrl: './sidebar-carrito.html',
  styleUrl: './sidebar-carrito.css',
})
export class SidebarCarrito implements OnInit {
  productos: Producto[] = [];
  constructor(private carritoService: Carrito) { }

  ngOnInit() {
    console.log('PaginaCarrito iniciado');
    this.carritoService.productos.subscribe(p => {
      this.productos = p;
    });
  }
}