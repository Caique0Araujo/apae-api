import { Product } from "../../../domain/entities/product";
import { GetProductsUseCase } from "../../../domain/useCases/product/getAll";
import { GetProductsRepository } from "../../interfaces/product/getAllRepository";

export class GetProductsService implements GetProductsUseCase{
    constructor(
        private readonly getProductRepository: GetProductsRepository
    ){}

    async load(): Promise<Product[]> {
        return await this.getProductRepository.getAll();
    }
}