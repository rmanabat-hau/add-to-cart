import { Cart } from "../../models/cart";
import { CartService } from "../cartService";
import { CartRepositoryImpl } from "../../repositories/impl/cartRepositoryImpl";

const cartRepo = new CartRepositoryImpl();

export class CartServiceImpl implements CartService {
  async getCarts(): Promise<Cart[]> {
    return cartRepo.findAll();
  }

  async getCartById(id: number): Promise<Cart | null> {
    return cartRepo.findById(id);
  }

  async createCart(data: Omit<Cart, "id">): Promise<Cart> {
    return cartRepo.create(data);
  }
}
