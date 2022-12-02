import { GetNewsByIdUseCase } from "../../../domain/useCases/news/getById";
import { Controller } from "../controller";
import { HttpResponse, serverError, ok, defaultError } from "../http";

export class GetNewsByIdController implements Controller {
  constructor(
    private readonly getNewsByIdUseCase: GetNewsByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news = await this.getNewsByIdUseCase.load(data.content.id);
        return ok(news);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}