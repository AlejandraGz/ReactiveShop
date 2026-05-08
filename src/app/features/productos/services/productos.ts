import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinct, map, Observable } from 'rxjs';
import { Producto } from '../../../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class Productos {

  private url = 'assets/data.json';

  constructor(private http: HttpClient) {
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<any>(this.url)
      .pipe(map(data => data.productos));
  }
}
