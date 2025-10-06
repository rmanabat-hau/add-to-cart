import { Product } from "../models/product";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  create(data: Omit<Product, "id">): Promise<Product>;
}
