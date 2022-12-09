import { defaultError } from './../http';
import { GetNewsUseCase } from '../../../domain/useCases/news/getAll';
import { HttpResponse, ok } from '../http';
import { Controller } from './../controller';
import fs from 'fs'
export class GetNewsController implements Controller{
  constructor(
    private readonly getNewsUseCase: GetNewsUseCase
  ){}
  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news:any = await this.getNewsUseCase.load();
        news.map((news) => {
          news.image_path = fs.readFileSync(news.image_path)

        })
        return ok(news);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error);
      }
  }
}