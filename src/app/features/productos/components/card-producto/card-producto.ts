import { Component, Input } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css',
})
export class CardProducto {
  @Input() producto!: Producto;

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  
}