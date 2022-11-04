import { Product } from "../../entities/product";

export interface GetProductByIdUseCase {
  load(id: number): Promise<Product>;
}