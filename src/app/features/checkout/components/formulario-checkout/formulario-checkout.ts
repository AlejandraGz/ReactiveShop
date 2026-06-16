import { Component } from '@angular/core';
import { CarritoPagado } from "../carrito-pagado/carrito-pagado";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-checkout',
  imports: [CarritoPagado, FormsModule],
  templateUrl: './formulario-checkout.html',
  styleUrl: './formulario-checkout.css',
})
export class FormularioCheckout {

  toggle: boolean = false;

  toggleModal() {
    this.toggle = true;
  }
}
