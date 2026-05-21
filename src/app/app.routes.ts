import { Routes } from '@angular/router';

import { ListaProductos } from './features/productos/pages/lista-productos/lista-productos';
import { ListaCategorias } from './features/categorias/pages/lista-categorias/lista-categorias';
import { PaginaCarrito } from './features/carrito/pages/pagina-carrito/pagina-carrito';
import { CheckoutPage } from './features/checkout/pages/checkout-page/checkout-page';
import { DetalleProducto } from './features/productos/pages/detalle-producto/detalle-producto';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    component: ListaCategorias
  },
  {
    path: 'categoria/:nombre/productos',
    component: ListaProductos
  },
  {
    path: 'productos',
    component: ListaProductos
  },
  {
    path: 'producto/:nombre',
    component: DetalleProducto
  },
  {
    path: 'carrito',
    component: PaginaCarrito
  },
  {
    path: 'checkout',
    component: CheckoutPage
  },
  {
    path: '**',
    redirectTo: 'categorias'
  }
];