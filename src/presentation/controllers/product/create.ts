import { CreateProductUseCase } from "../../../domain/useCases/product/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";
import { v4 as uuidv4 } from 'uuid';
const rootDir = require('path').resolve('./');

export class CreateProductController implements Controller{
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {

        const photoDir = rootDir+'\\photos\\products\\'
        console.log(photoDir)

        try {
            const image = data.file;
            const imageName = uuidv4()
            const imagePath = photoDir+imageName+'.png';
            image.mv(imagePath)
            data.content.image_path = imagePath
            data.content.price =  parseFloat(data.content.price)
            const product = await this.createProductUseCase.load(data.content);
            return created(product);
        } catch (error) {  
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}