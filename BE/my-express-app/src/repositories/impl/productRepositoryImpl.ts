import { PrismaClient } from "@prisma/client";
import { ProductRepository } from "../productRepository";
import { Product } from "../../models/product";

const prisma = new PrismaClient();

export class ProductRepositoryImpl implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(data: Omit<Product, "id" | "cartId" | "cart">): Promise<Product> {
    return prisma.product.create({ data });
  }
}
