import { Cart } from "../models/cart";

export interface CartRepository {
  findAll(): Promise<Cart[]>;
  findById(id: number): Promise<Cart | null>;
  create(data: Omit<Cart, "id">): Promise<Cart>;
}
