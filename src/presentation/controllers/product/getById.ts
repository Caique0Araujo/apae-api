import { GetProductByIdUseCase } from "../../../domain/useCases/product/getById";
import { Controller } from "../controller";
import { HttpResponse, serverError, ok, defaultError } from "../http";

export class GetProductByIdController implements Controller {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const product = await this.getProductByIdUseCase.load(data.content.id);
        return ok(product);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}