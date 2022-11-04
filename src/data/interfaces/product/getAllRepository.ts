import { Product } from "../../dto/product";

export interface GetProductsRepository{
    getAll(): Promise<Product[]>;
}