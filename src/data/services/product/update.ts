import { UpdateProductRepository } from './../../interfaces/product/updateRepository';
import { UpdateProductUseCase } from "../../../domain/useCases/product/update";

export class UpdateProductService implements UpdateProductUseCase{
  constructor(
    private readonly updateProductRepository: UpdateProductRepository
  ){}

  async load(data: any): Promise<Boolean> {
      return await this.updateProductRepository.update(data);
  }
}