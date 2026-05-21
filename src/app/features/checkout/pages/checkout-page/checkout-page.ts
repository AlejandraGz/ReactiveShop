import { Component } from '@angular/core';
import { FormularioCheckout } from "../../formulario-checkout/formulario-checkout";
import { ResumenPedido } from "../../../carrito/components/resumen-pedido/resumen-pedido";

@Component({
  selector: 'app-checkout-page',
  imports: [FormularioCheckout, ResumenPedido],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {}
