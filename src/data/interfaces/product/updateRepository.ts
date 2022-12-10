import { Product } from "../../dto/product";

export interface UpdateProductRepository {
  update(product: Product): Promise<Boolean>
}