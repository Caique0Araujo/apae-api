import { defaultError, HttpResponse, ok } from '../http';
import { CountProductsUseCase } from './../../../domain/useCases/product/count';
import { Controller } from './../controller';
export class CountProductsController implements Controller {
  constructor(
    private readonly countProductsUseCase: CountProductsUseCase
  ){}

  async handle(): Promise<HttpResponse<any>> {
      try {
        const products_quantity = await this.countProductsUseCase.load();
        return ok({products_quantity});
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}