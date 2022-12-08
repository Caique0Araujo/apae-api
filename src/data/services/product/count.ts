import { CountProductsUseCase } from './../../../domain/useCases/product/count';
import { Product } from "../../../domain/entities/product";
import { GetProductsRepository } from "../../interfaces/product/getAllRepository";
import { CountProductsRepository } from '../../interfaces/product/countRepository';

export class CountProductsService implements CountProductsUseCase{
    constructor(
        private readonly countProductsRepository: CountProductsRepository
    ){}

    async load(): Promise<number> {
        return await this.countProductsRepository.count();
    }
}