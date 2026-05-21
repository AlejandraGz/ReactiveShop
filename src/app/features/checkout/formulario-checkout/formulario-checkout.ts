import { Component } from '@angular/core';
import { ResumenPedido } from "../../carrito/components/resumen-pedido/resumen-pedido";

@Component({
  selector: 'app-formulario-checkout',
  imports: [ResumenPedido],
  templateUrl: './formulario-checkout.html',
  styleUrl: './formulario-checkout.css',
})
export class FormularioCheckout {}
