import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateNewsController implements Controller{
    constructor(
        private readonly createNewsUseCase: CreateNewsUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const news = await this.createNewsUseCase.load(data.content);
            news.created_at_utc = Date.now()
            return created(news);
        } catch (error) { 
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}