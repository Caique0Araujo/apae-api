import { defaultError, deleted } from './../http';
import { DeleteProductUseCase } from '../../../domain/useCases/product/delete';
import { HttpResponse } from '../http';
import { Controller } from './../controller';
import { NotFoundError } from '../../../domain/errors/NotFoundError';
export class DeleteProductController implements Controller{
  constructor(
    private readonly deleteProductUseCase: DeleteProductUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const product_deleted = await this.deleteProductUseCase.load(data.content.id)
        return product_deleted ? deleted(product_deleted) : defaultError(new NotFoundError('product'))
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}