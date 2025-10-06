import { Product } from "../../models/product";
import { ProductService } from "../productService";
import { ProductRepositoryImpl } from "../../repositories/impl/productRepositoryImpl";

const productRepo = new ProductRepositoryImpl();

export class ProductServiceImpl implements ProductService {
  async getProducts(): Promise<Product[]> {
    return productRepo.findAll();
  }

  async getProductById(id: number): Promise<Product | null> {
    return productRepo.findById(id);
  }

  async createProduct(data: Omit<Product, "id">): Promise<Product> {
    return productRepo.create(data);
  }
}
