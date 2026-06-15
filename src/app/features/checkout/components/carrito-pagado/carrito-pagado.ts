import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carrito } from '../../../carrito/services/carrito';

@Component({
  selector: 'app-carrito-pagado',
  imports: [RouterLink],
  templateUrl: './carrito-pagado.html',
  styleUrl: './carrito-pagado.css',
})
export class CarritoPagado {
  constructor(private carritoService: Carrito ) {}
  limpiarCarrito() {
    this.carritoService.limpiarCarrito();
  }
}
