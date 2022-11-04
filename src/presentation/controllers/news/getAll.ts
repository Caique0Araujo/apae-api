import { GetNewsUseCase } from "../../../domain/useCases/news/getAll";
import { notFound, ok, HttpResponse} from "../http";
import { Controller } from "../controller";

export class GetNewsController implements Controller{
    constructor(
        private readonly getNewsUseCase: GetNewsUseCase
    ){}
    
    async handle(): Promise<HttpResponse<any>>{
        try {
            const news = await this.getNewsUseCase.load();
            return ok(news);
            
        } catch (error) {
            return notFound(error);
        }
    }
}