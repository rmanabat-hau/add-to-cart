import { Request, Response } from "express";
import { ProductServiceImpl } from "../services/impl/productServiceImpl";

const productService = new ProductServiceImpl();

export const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getProducts();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = await productService.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  if (!name || !description || price === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newProduct = await productService.createProduct({ name, description, price });
  res.status(201).json(newProduct);
};
