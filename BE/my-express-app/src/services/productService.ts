import { Product } from "../models/product";

export interface ProductService {
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
  createProduct(data: Omit<Product, "id">): Promise<Product>;
}
