import { ok, defaultError } from './../http';
import { CountNewsUseCase } from '../../../domain/useCases/news/count';
import { HttpResponse } from '../http';
import { Controller } from './../controller';
export class CountNewsController implements Controller {
  constructor(
    private readonly countNewsUseCase: CountNewsUseCase
  ){}
  async handle(): Promise<HttpResponse<any>> {
      
      try{
        const news_quantity = await this.countNewsUseCase.load();
        return ok({news_quantity});
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}