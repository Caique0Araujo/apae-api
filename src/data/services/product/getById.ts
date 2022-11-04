import { Product } from "../../../domain/entities/product";
import { GetProductByIdUseCase } from "../../../domain/useCases/product/getById";
import { GetProductByIdRepository } from "../../interfaces/product/getByIdRepository";

export class GetProductByIdService implements GetProductByIdUseCase{
  constructor(
    private readonly getProductByIdRepository: GetProductByIdRepository
  ){}

  async load(id: number): Promise<Product> {
      return await this.getProductByIdRepository.getById(id);
  }
}