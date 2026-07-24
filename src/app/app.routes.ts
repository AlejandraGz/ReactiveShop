import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    loadComponent: () =>
      import('./features/categorias/pages/lista-categorias/lista-categorias')
        .then(m => m.ListaCategorias)
  },
  {
    path: 'categoria/:nombre/productos',
    loadComponent: () =>
      import('./features/productos/pages/lista-productos/lista-productos')
        .then(m => m.ListaProductos)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/productos/pages/lista-productos/lista-productos')
        .then(m => m.ListaProductos)
  },
  {
    path: 'producto/:nombre',
    loadComponent: () =>
      import('./features/productos/pages/detalle-producto/detalle-producto')
        .then(m => m.DetalleProducto)
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./features/carrito/pages/pagina-carrito/pagina-carrito')
        .then(m => m.PaginaCarrito)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/pages/checkout-page/checkout-page')
        .then(m => m.CheckoutPage)
  },
  {
    path: '**',
    redirectTo: 'categorias'
  }
];