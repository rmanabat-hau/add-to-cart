import { Cart } from "../models/cart";

export interface CartService {
  getCarts(): Promise<Cart[]>;
  getCartById(id: number): Promise<Cart | null>;
  createCart(data: Omit<Cart, "id">): Promise<Cart>;
}
