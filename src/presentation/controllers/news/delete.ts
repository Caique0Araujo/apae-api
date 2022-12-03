import { NotFoundError } from '../../../domain/errors/NotFoundError';
import { defaultError, deleted, HttpResponse } from '../http';
import { DeleteNewsUseCase } from './../../../domain/useCases/news/delete';
import { Controller } from './../controller';
export class DeleteNewsController implements Controller {
  constructor(
    private readonly deleteNewsUseCase: DeleteNewsUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const news_deleted = await this.deleteNewsUseCase.load(data.content.id);
        return news_deleted ? deleted(news_deleted) : defaultError(new NotFoundError('user'));
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}