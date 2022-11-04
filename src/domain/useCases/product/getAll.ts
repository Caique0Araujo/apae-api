import { Product } from "../../entities/product";

export interface GetProductsUseCase{
    load(): Promise<Product[]>
}