import { Component } from '@angular/core';
import { Carrito } from '../../services/carrito';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen-pedido',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './resumen-pedido.html',
  styleUrl: './resumen-pedido.css',
})
export class ResumenPedido {
  constructor(private carritoService: Carrito) {}
  
    totalCarrito() {
      return this.carritoService.totalCarrito()
    }
    totalCantidadProductos(){
      return this.carritoService.totalCantidadProductos();
    }
}
