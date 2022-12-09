import { GetRecentNewsUseCase } from "../../../domain/useCases/news/getRecent";
import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";
import fs from 'fs'

export class GetRecentNewsController implements Controller{
    constructor(
        private readonly getRecentNewsUseCase: GetRecentNewsUseCase
    ){}
    
    async handle(data: any): Promise<HttpResponse<any>>{
        try {
            const news:any = await this.getRecentNewsUseCase.load(data.content);
            news.map((news) => {
                news.image_path = fs.readFileSync(news.image_path)
                news.image_path = Buffer.from(news.image_path).toString('base64');
      
              })
            return ok(news);
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}