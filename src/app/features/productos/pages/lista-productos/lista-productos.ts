import { Component, OnInit } from '@angular/core';
import { Data } from '../../../../core/services/data';
import { Producto } from '../../../../models/producto.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CardProducto } from "../../components/card-producto/card-producto";

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, CardProducto],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  productos$!: Observable<Producto[]>;
  constructor(
    private dataService: Data,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productos$ = this.route.params.pipe(
      switchMap(params => {
        const nombreSlug = params['nombre'];

        return this.dataService.getCategorias().pipe(
          switchMap(categorias => {

            const categoria = categorias.find(
              c => this.slugify(c.nombre) === nombreSlug
            );

            if (!categoria) return this.dataService.getProductos().pipe(
              map(() => [])
            );

            return this.dataService.getProductos().pipe(
              map(productos => productos.filter(
                p => p.categoriaId === categoria.id
              ))
            )
          })
        );
      })
    )
  }
  slugify = (text: string) => text
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


