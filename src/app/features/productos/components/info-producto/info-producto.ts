import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from "@angular/material/icon";
import { Producto } from '../../../../models/producto.model';
import { Carrito } from '../../../carrito/services/carrito';

@Component({
  selector: 'app-info-producto',
  imports: [CurrencyPipe, MatIcon],
  templateUrl: './info-producto.html',
  styleUrl: './info-producto.css',
})
export class InfoProducto {
  @Input() nombre: string | null = '';
  @Input() precio: number | null = null;
  @Input() descripcion: string | null = '';
  @Input() stock: number | null = null;
  @Input() producto!: Producto;

  constructor(private carritoServicio: Carrito) { }

  agregarProducto() {
    console.log('info-producto:' + this.producto);
    this.carritoServicio.agregarProducto(this.producto);
  }
}
