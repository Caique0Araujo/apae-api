import { Product } from "../../dto/product";

export interface CreateProductRepository{
    create(product: Product): Promise<Product>;
}