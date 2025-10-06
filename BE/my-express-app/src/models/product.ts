import { Cart } from "./cart";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  cartId?: number | null;
  cart?: Cart
}