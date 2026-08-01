import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Producto } from '../../../../models/producto.model';
import { CardProducto } from '../../components/card-producto/card-producto';
import { FiltrosProductos } from '../../components/filtros-productos/filtros-productos';
import { Productos } from '../../services/productos';
import { CategoriaService } from '../../../categorias/services/categoria';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CommonModule,
    CardProducto,
    FiltrosProductos
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private productoService: Productos,
    private route: ActivatedRoute
  ) {}

  productos$!: Observable<Producto[]>;
  marcasFiltradas$!: Observable<string[]>;
  mostrarFiltroCategoria$!: Observable<boolean>;

  productoFiltro$ = new BehaviorSubject<string>('');
  categoriaFiltro$ = new BehaviorSubject<number | null>(null);
  marcaFiltro$ = new BehaviorSubject<string>('');
  precioMinFiltro$ = new BehaviorSubject<number>(0);
  precioMaxFiltro$ = new BehaviorSubject<number>(500000);

  actualizarProducto(producto: string) {
    this.productoFiltro$.next(producto);
  }

  actualizarCategoria(categoria: number | null) {
    this.categoriaFiltro$.next(categoria);
  }

  actualizarMarca(marca: string) {
    this.marcaFiltro$.next(marca);
  }

  actualizarPrecioMin(precio: number) {
    this.precioMinFiltro$.next(precio);
  }

  actualizarPrecioMax(precio: number) {
    this.precioMaxFiltro$.next(precio);
  }

  ngOnInit(): void {

    const categorias$ = this.categoriaService.getCategorias().pipe(
      shareReplay(1)
    );

    const productos$ = this.productoService.getProductos().pipe(
      shareReplay(1)
    );

    this.mostrarFiltroCategoria$ = this.route.params.pipe(
      map(params => !params['nombre'])
    );

    const productosBase$ = combineLatest([
      productos$,
      categorias$,
      this.route.params
    ]).pipe(

      map(([productos, categorias, params]) => {

        const nombreSlug = params['nombre'];

        if (!nombreSlug) {
          return productos;
        }

        const categoria = categorias.find(
          c => this.slugify(c.nombre) === nombreSlug
        );

        if (!categoria) {
          return [];
        }

        return productos.filter(
          producto => producto.categoriaId === categoria.id
        );

      }),

      shareReplay(1)

    );

    this.productos$ = combineLatest([
      productosBase$,
      this.productoFiltro$,
      this.categoriaFiltro$,
      this.marcaFiltro$,
      this.precioMinFiltro$,
      this.precioMaxFiltro$
    ]).pipe(

      map(([

        productos,
        texto,
        categoriaId,
        marca,
        precioMin,
        precioMax

      ]) => {

        texto = texto.toLowerCase();

        return productos.filter(producto => {

          const coincideTexto =
            producto.nombre.toLowerCase().includes(texto);

          const coincideCategoria =
            categoriaId == null
              ? true
              : producto.categoriaId === categoriaId;

          const coincideMarca =
            !marca
              ? true
              : producto.marca === marca;

          const coincidePrecio =
            producto.precio >= precioMin &&
            producto.precio <= precioMax;

          return (
            coincideTexto &&
            coincideCategoria &&
            coincideMarca &&
            coincidePrecio
          );

        });

      })

    );

    this.marcasFiltradas$ = combineLatest([
      productosBase$,
      this.categoriaFiltro$
    ]).pipe(

      map(([productos, categoriaId]) => {

        const lista = categoriaId == null
          ? productos
          : productos.filter(
              p => p.categoriaId === categoriaId
            );

        return [...new Set(lista.map(p => p.marca))];

      })

    );

  }

  private slugify(text: string): string {

    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  }

}