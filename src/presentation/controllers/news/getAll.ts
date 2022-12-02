import { GetNewsUseCase } from "../../../domain/useCases/news/getAll";
import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";

export class GetNewsController implements Controller{
    constructor(
        private readonly getNewsUseCase: GetNewsUseCase
    ){}
    
    async handle(data: any): Promise<HttpResponse<any>>{
        try {
            const news = await this.getNewsUseCase.load(data.content);
            return ok(news);
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}