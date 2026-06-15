import { Component } from '@angular/core';
import { ResumenPedido } from "../../../carrito/components/resumen-pedido/resumen-pedido";
import { CarritoPagado } from "../carrito-pagado/carrito-pagado";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-checkout',
  imports: [ResumenPedido, CarritoPagado, FormsModule],
  templateUrl: './formulario-checkout.html',
  styleUrl: './formulario-checkout.css',
})
export class FormularioCheckout {

  toggle: boolean = false;

  toggleModal() {
    this.toggle = true;
  }
}
