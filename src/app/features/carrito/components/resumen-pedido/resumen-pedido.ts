import { Component } from '@angular/core';
import { Carrito } from '../../services/carrito';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen-pedido',
  imports: [CurrencyPipe, AsyncPipe, RouterLink],
  templateUrl: './resumen-pedido.html',
  styleUrl: './resumen-pedido.css',
})
export class ResumenPedido {

  total$;
  cantidadProductos$;

  constructor(
    private carritoService: Carrito
  ) {
    this.total$ = carritoService.total$;
    this.cantidadProductos$ = carritoService.cantidadProductos$;
  }
}

