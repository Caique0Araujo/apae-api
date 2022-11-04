import { Product } from "../../entities/product";

export interface CreateProductUseCase{
    load(product: Product): Promise<Product>;
}