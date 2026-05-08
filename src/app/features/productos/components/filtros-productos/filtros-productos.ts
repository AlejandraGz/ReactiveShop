import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Categoria } from '../../../../models/categoria.model';
import { Data } from '../../../../core/services/data';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-filtros-productos',
  imports: [CommonModule],
  templateUrl: './filtros-productos.html',
  styleUrls: [
    './filtros-productos.css',
    '../../../../../styles/_variables.css']
})
export class FiltrosProductos implements OnInit{
  @Input() mostrarFiltroCategoria = true;
  @Input() marcas: string[] | null = [];
  @Output() producto = new EventEmitter<string>();
  @Output() categoria = new EventEmitter<number | null>();
  @Output() marca = new EventEmitter<string>();
  @Output() precioMin = new EventEmitter<number>();
  @Output() precioMax = new EventEmitter<number>();

  categorias$!: Observable<Categoria[]>

  constructor(private dataService: Data, private productoService: Productos){}

  ngOnInit(): void {
    this.categorias$ = this.dataService.getCategorias();
  }
  buscarProducto(event: Event) {
    const input = event.target as HTMLInputElement;
    this.producto.emit(input.value);
  }

  buscarCategoria(event: Event){
    const categoriaSeleccionada = event.target as HTMLInputElement;
    this.categoria.emit(Number(categoriaSeleccionada.value));
  }
  buscarMarca(event: Event){
    const marcaSeleccionada = event.target as HTMLInputElement;
    this.marca.emit(marcaSeleccionada.value);
  }


}
