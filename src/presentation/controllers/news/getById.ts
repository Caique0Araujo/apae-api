import { GetNewsByIdUseCase } from "../../../domain/useCases/news/getById";
import { Controller } from "../controller";
import { HttpResponse, serverError, ok, defaultError } from "../http";
import fs from 'fs'
export class GetNewsByIdController implements Controller {
  constructor(
    private readonly getNewsByIdUseCase: GetNewsByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news:any = await this.getNewsByIdUseCase.load(data.content.id);
        news.image_path = fs.readFileSync(news.image_path)
        news.image_path = Buffer.from(news.image_path).toString('base64');
        return ok(news);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}