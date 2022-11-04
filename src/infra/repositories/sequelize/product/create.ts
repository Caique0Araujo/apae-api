import { Product } from "../../../../data/dto/product";
import { CreateProductRepository } from "../../../../data/interfaces/product/createRepository";
import product from "../../../dataSource/sequelize/products";

export class CreateProductRepositorySequelize implements CreateProductRepository{
    async create(newProduct: Product): Promise<Product> {
        return await product.create(newProduct);
    }
}