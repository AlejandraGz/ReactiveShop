import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '../../../../core/services/data';
import { Producto } from '../../../../models/producto.model';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CardProducto } from "../../components/card-producto/card-producto";
import { FiltrosProductos } from "../../components/filtros-productos/filtros-productos";
import { Productos } from '../../services/productos';
@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, CardProducto, FiltrosProductos],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  constructor(
    private dataService: Data,
    private productoService: Productos,
    private route: ActivatedRoute
  ) { }
  productos$!: Observable<Producto[]>;
  marcasFiltradas$!: Observable<string[]>;

  productoFiltro$ = new BehaviorSubject<string>('');
  categoriaFiltro$ = new BehaviorSubject<number | null>(null);
  marcaFiltro$ = new BehaviorSubject<string>('');
  precioMinFiltro$ = new BehaviorSubject<number>(0);
  precioMaxFiltro$ = new BehaviorSubject<number>(500000);

  mostrarFiltroCategoria = true;

  actualizarProducto(producto: string) {
    this.productoFiltro$.next(producto);
  }
  actualizarCategoria(categoria: number | null) {
    this.categoriaFiltro$.next(categoria);
  }
  actualizarMarca(marca: string) {
    this.marcaFiltro$.next(marca);
  }
  actualizarPrecioMin(precioMin: number) {
    this.precioMinFiltro$.next(precioMin);
  }
  actualizarPrecioMax(precioMax: number) {
    this.precioMaxFiltro$.next(precioMax);
  }




  ngOnInit(): void {
    const productosBase$ = this.route.params.pipe(

      switchMap(params => {
        this.mostrarFiltroCategoria = !params['nombre'];

        const nombreSlug = params['nombre'];

        return this.dataService.getCategorias().pipe(
          switchMap(categorias => {

            const categoria = categorias.find(
              c => this.slugify(c.nombre) === nombreSlug
            );

            //si no hay categoria en URL
            if (!nombreSlug) {
              return this.productoService.getProductos();
            }

            //si categoria no existe
            if (!categoria) return this.productoService.getProductos().pipe(
              map(() => [])
            );

            return this.productoService.getProductos().pipe(
              map(productos => {

                const productosFiltrados = productos.filter(
                  p => p.categoriaId === categoria.id
                );

                return productosFiltrados;
              })
            );
          })
        );
      })
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

        return productos.filter(producto => {

          const coincideTexto = producto.nombre.toLowerCase().includes(texto.toLowerCase());

          const coincideCategoria =
            categoriaId
              ? producto.categoriaId === categoriaId
              : true;

          const coincideMarca =
            marca
              ? producto.marca === marca
              : true;

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

    )
    this.marcasFiltradas$ = combineLatest([
      productosBase$,
      this.categoriaFiltro$
    ]).pipe(
      map(([productos, categoriaId]) => {
        const productosCategoria = categoriaId
          ? productos.filter(p => p.categoriaId === categoriaId)
          : productos;

        return [...new Set(productosCategoria.map(p => p.marca))]
      })
    )

  }
  slugify = (text: string) => text
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
