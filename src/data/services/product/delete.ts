import { DeleteProductRepository } from './../../interfaces/product/deleteRepository';
import { DeleteProductUseCase } from "../../../domain/useCases/product/delete";

export class DeleteProductService implements DeleteProductUseCase{
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository
  ){}

  async load(id: number): Promise<Boolean> {
      return await this.deleteProductRepository.delete(id);
  }
}