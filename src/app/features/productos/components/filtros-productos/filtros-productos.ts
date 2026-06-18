import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../../models/categoria.model';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Productos } from '../../services/productos';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CategoriaService } from '../../../categorias/services/categoria';

@Component({
  selector: 'app-filtros-productos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filtros-productos.html',
  styleUrls: [
    './filtros-productos.css',
    '../../../../../styles/_variables.css']
})
export class FiltrosProductos implements OnInit {
  @Input() mostrarFiltroCategoria = true;
  @Input() marcas: string[] | null = [];
  @Output() producto = new EventEmitter<string>();
  @Output() categoria = new EventEmitter<number | null>();
  @Output() marca = new EventEmitter<string>();
  @Output() precioMin = new EventEmitter<number>();
  @Output() precioMax = new EventEmitter<number>();

  categorias$!: Observable<Categoria[]>
  productos$;

  buscadorControl = new FormControl('');
  constructor(private CategoriaService: CategoriaService, private productoService: Productos) {

    this.productos$ = productoService.getProductos();

  }

  ngOnInit(): void {
    this.categorias$ = this.CategoriaService.getCategorias();

      this.buscadorControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(texto => {
        this.producto.emit(texto ?? '')
      }
    )
  }
  buscarCategoria(event: Event) {
    const categoriaSeleccionada = event.target as HTMLInputElement;
    this.categoria.emit(Number(categoriaSeleccionada.value));
  }
  buscarMarca(event: Event) {
    const marcaSeleccionada = event.target as HTMLInputElement;
    this.marca.emit(marcaSeleccionada.value);
  }


}
