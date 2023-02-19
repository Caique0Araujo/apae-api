import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";
import { v4 as uuidv4 } from 'uuid';
const rootDir = require('path').resolve('./');
import getImageExtensionThroughType from "../../../helpers/image/imageExtension";
export class CreateNewsController implements Controller{
    constructor(
        private readonly createNewsUseCase: CreateNewsUseCase
    ){}


    async handle(data: any): Promise<HttpResponse<any>> {

        const photoDir = rootDir+'//photos//news//'
        const imageExtension = getImageExtensionThroughType(data.file.mimetype)

        try {
            const image = data.file
            const imageName = uuidv4();
            
            const imagePath = photoDir + imageName + imageExtension
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