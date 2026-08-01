import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Carrito } from '../../features/carrito/services/carrito';
import { AsyncPipe } from '@angular/common';
import { MatBadge } from '@angular/material/badge';
import { map, Observable, shareReplay } from 'rxjs';
import { ResponsiveService } from '../../core/services/responsive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatButtonModule, MatBadge, RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrls: [
    './navbar.css',
    '../../../styles/_variables.css'
  ]
})
export class Navbar {
  cantidadProductos$;
  isHandSet$!: Observable<boolean>;
  menuAbierto: boolean = false;

  constructor(
    private carritoService: Carrito,
    public responsive: ResponsiveService
  ) {
    this.cantidadProductos$ = carritoService.cantidadProductos$

  }
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto
  }
}
