import { Component, Input } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-producto',
  imports: [CommonModule],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css',
})
export class CardProducto {
  @Input() producto!: Producto;
}