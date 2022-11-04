import { Product } from "../../dto/product";

export interface GetProductByIdRepository {
  getById(id: number): Promise<Product>; 
}