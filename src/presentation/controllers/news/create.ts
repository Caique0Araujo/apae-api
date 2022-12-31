import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";
import { v4 as uuidv4 } from 'uuid';
const rootDir = require('path').resolve('./');
export class CreateNewsController implements Controller{
    constructor(
        private readonly createNewsUseCase: CreateNewsUseCase
    ){}


    async handle(data: any): Promise<HttpResponse<any>> {

        const photoDir = rootDir+'\\photos\\news\\'

        try {
            const image = data.file
            const imageName = uuidv4();
            const imagePath = photoDir + imageName +'.png'
            image.mv(imagePath)
            data.content.image_path = imagePath
            data.content.created_at_utc = Date.now()
            const news = await this.createNewsUseCase.load(data.content);

            return created(news);
        } catch (error) { 
            if(!error.status) error.status = 500
            return defaultError(error);
        }
        
    }
}