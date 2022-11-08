import { GetProductByIdUseCase } from "../../../domain/useCases/product/getById";
import { Controller } from "../controller";
import { HttpResponse, notFound, ok } from "../http";

export class GetProductByIdController implements Controller {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const product = await this.getProductByIdUseCase.load(data.id);
        return ok(product);
      } catch (error) {
        return notFound(error)
      }
  }
}