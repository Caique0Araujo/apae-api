import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export class CreateNewsController implements Controller{
    constructor(
        private readonly createNewsUseCase: CreateNewsUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {


        try {
            const image = data.file
            const imagePath = __dirname+'../../../../../photos/news/'+ uuidv4()+'.png'
            image.mv(imagePath)
            data.content.image_path = imagePath
            //console.log(data.content)
            data.content.created_at_utc = Date.now()
            const news = await this.createNewsUseCase.load(data.content);

            return created(news);
        } catch (error) { 
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}