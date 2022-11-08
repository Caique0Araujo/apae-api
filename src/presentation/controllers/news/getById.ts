import { GetNewsByIdUseCase } from "../../../domain/useCases/news/getById";
import { Controller } from "../controller";
import { HttpResponse, notFound, ok } from "../http";

export class GetNewsByIdController implements Controller {
  constructor(
    private readonly getNewsByIdUseCase: GetNewsByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news = await this.getNewsByIdUseCase.load(data.id);
        return ok(news);
      } catch (error) {
        return notFound(error)
      }
  }
}