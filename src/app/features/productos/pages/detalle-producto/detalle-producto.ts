import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { Productos } from '../../services/productos';
import { Observable, map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ImagenProducto } from "../../components/imagen-producto/imagen-producto";
import { InfoProducto } from "../../components/info-producto/info-producto";

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, ImagenProducto, InfoProducto],
  templateUrl: './detalle-producto.html',
  styleUrls: ['./detalle-producto.css'],
})
export class DetalleProducto implements OnInit {

  constructor(
    private productoService: Productos,
    private route: ActivatedRoute
  ) { }


  producto$!: Observable<Producto | undefined>;

  ngOnInit(): void {
    this.producto$ = this.route.params.pipe(
      switchMap(params => {
        const nombreSlug = params['nombre'];

        return this.productoService.getProductos().pipe(
          map(productos => {
            const producto = productos.find(
              p => this.slugify(p.nombre) === nombreSlug
            )

            return producto;
          }
          )
        );
      })
    );
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}