import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Carrito } from '../../features/carrito/services/carrito';
import { AsyncPipe } from '@angular/common';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, MatBadge, RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrls: [
    './navbar.css',
    '../../../styles/_variables.css'
  ]
})
export class Navbar {
  cantidadProductos$;
  
  constructor(private carritoService: Carrito) {
    this.cantidadProductos$ = carritoService.cantidadProductos$
  }
}
