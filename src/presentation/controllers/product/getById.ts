import { GetProductByIdUseCase } from "../../../domain/useCases/product/getById";
import { Controller } from "../controller";
import { HttpResponse, serverError, ok, defaultError } from "../http";
import fs from 'fs'

export class GetProductByIdController implements Controller {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const product:any = await this.getProductByIdUseCase.load(data.content.id);
        product.image_path = fs.readFileSync(product.image_path);
        product.image_path = Buffer.from(product.image_path).toString('base64')
        product.price =  parseFloat(product.price)
        return ok(product);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}