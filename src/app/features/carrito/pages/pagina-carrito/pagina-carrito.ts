import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../services/carrito';
import { CommonModule } from '@angular/common';
import { ItemCarrito } from '../../models/carrito.model';

@Component({
  selector: 'app-pagina-carrito',
  imports: [CommonModule],
  templateUrl: './pagina-carrito.html',
  styleUrl: './pagina-carrito.css',
})
export class PaginaCarrito implements OnInit {
  productos: ItemCarrito[] = [];
  constructor(private carritoService: Carrito) { }

  ngOnInit() {
    console.log('PaginaCarrito iniciado');
    this.carritoService.productos.subscribe(p => {
      this.productos = p;
    });
  }
}
