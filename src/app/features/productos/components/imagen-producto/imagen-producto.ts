import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-imagen-producto',
  imports: [],
  templateUrl: './imagen-producto.html',
  styleUrl: './imagen-producto.css',
})
export class ImagenProducto {
  @Input() imagen: string = '';
}
