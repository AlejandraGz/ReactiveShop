import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../../models/categoria.model';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Productos } from '../../services/productos';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CategoriaService } from '../../../categorias/services/categoria';
import { ResponsiveService } from '../../../../core/services/responsive';

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
  @Output() cerrar = new EventEmitter<void>();

  categorias$!: Observable<Categoria[]>
  productos$;

  buscadorControl = new FormControl('');
  constructor(
    private CategoriaService: CategoriaService,
    private productoService: Productos,
    public responsive: ResponsiveService
  ) {

    this.productos$ = productoService.getProductos();

  }

  ngOnInit(): void {
    this.categorias$ = this.CategoriaService.getCategorias();

  }
  buscarProducto() {
    this.producto.emit(this.buscadorControl.value ?? '');
    this.cerrar.emit();
  }
  buscarCategoria(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.categoria.emit(value ? Number(value) : null);
    this.cerrar.emit();
  }
  buscarMarca(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.marca.emit(value || '');
    this.cerrar.emit();
  }


}
