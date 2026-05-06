import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../../models/producto.model';
import { Categoria } from '../../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class Data {

  private url = 'assets/data.json';

  constructor(private http: HttpClient) {
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<any>(this.url)
      .pipe(map(data => data.productos));
  }
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<any>(this.url)
      .pipe(map(data => data.categorias))
  }
}
