import { PrismaClient } from "@prisma/client";
import { CartRepository } from "../cartRepository";
import { Cart } from "../../models/cart";

const prisma = new PrismaClient();

export class CartRepositoryImpl implements CartRepository {
  async findAll(): Promise<Cart[]> {
    return prisma.cart.findMany();
  }

  async findById(id: number): Promise<Cart | null> {
    return prisma.cart.findUnique({ where: { id } });
  }

  async create(data: Omit<Cart, "id" | "products">): Promise<Cart> {
    return prisma.cart.create({ data });
  }
}
