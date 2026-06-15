import { Component } from '@angular/core';
import { FormularioCheckout } from "../../components/formulario-checkout/formulario-checkout";

@Component({
  selector: 'app-checkout-page',
  imports: [FormularioCheckout, ],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {}
