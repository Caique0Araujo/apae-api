import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { badRequest, created, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateNewsController implements Controller{
    constructor(
        private readonly createNewsUseCase: CreateNewsUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const news = await this.createNewsUseCase.load(data);
            news.created_at_utc = Date.now()
            return created(news);
        } catch (error) {  
            return badRequest(error);
        }
    }
}