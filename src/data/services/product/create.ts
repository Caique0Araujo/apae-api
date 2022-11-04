import { Product } from "../../../domain/entities/product";
import { CreateProductUseCase } from "../../../domain/useCases/product/create";
import { CreateProductRepository } from "../../interfaces/product/createRepository";

export class CreateProductService implements CreateProductUseCase{
    constructor(
        private readonly createProductRepository: CreateProductRepository
    ){}

    async load(product: Product): Promise<Product> {
        return await this.createProductRepository.create(product);
    }
}