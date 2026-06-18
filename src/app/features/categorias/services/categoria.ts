import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Categoria } from '../../../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  private url = 'assets/data.json';

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<any>(this.url).pipe(
      map(data => data.categorias))
  }
}
