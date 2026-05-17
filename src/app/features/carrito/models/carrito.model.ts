import { Producto } from "../../../models/producto.model";

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}