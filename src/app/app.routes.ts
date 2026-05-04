import { Routes } from '@angular/router';

import { ProductList } from './features/products/pages/product-list/product-list';
import { CartPage } from './features/cart/pages/cart-page/cart-page';
import { CheckoutPage } from './features/checkout/pages/checkout-page/checkout-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductList
  },
  {
    path: 'carrito',
    component: CartPage
  },
  {
    path: 'Confirmar-carrito',
    component: CheckoutPage
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];