import { GetNewsUseCase } from "../../../domain/useCases/news/getAll";
import { notFound, ok, HttpResponse} from "../http";
import { Controller } from "../controller";

export class GetNewsController implements Controller{
    constructor(
        private readonly getNewsUseCase: GetNewsUseCase
    ){}
    
    async handle(data: any): Promise<HttpResponse<any>>{
        try {
            console.log(data.start)
            if(data.start == 0){
                throw Error('O primeiro número não pode ser 0');
            }
            const news = await this.getNewsUseCase.load(data);
            return ok(news);
            
        } catch (error) {
            return notFound(error);
        }
    }
}