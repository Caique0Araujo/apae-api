import { GetRecentNewsUseCase } from "../../../domain/useCases/news/getRecent";
import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";

export class GetRecentNewsController implements Controller{
    constructor(
        private readonly getRecentNewsUseCase: GetRecentNewsUseCase
    ){}
    
    async handle(data: any): Promise<HttpResponse<any>>{
        try {
            const news = await this.getRecentNewsUseCase.load(data.content);
            return ok(news);
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}