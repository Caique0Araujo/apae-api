import { defaultError } from './../http';
import { GetNewsUseCase } from '../../../domain/useCases/news/getAll';
import { HttpResponse, ok } from '../http';
import { Controller } from './../controller';
export class GetNewsController implements Controller{
  constructor(
    private readonly getNewsUseCase: GetNewsUseCase
  ){}
  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news = await this.getNewsUseCase.load();
        return ok(news);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error);
      }
  }
}