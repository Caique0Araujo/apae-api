import { CreateProductUseCase } from "../../../domain/useCases/product/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";
import { v4 as uuidv4 } from 'uuid';

export class CreateProductController implements Controller{
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const image = data.file;
            const imagePath = __dirname+'../../../../../photos/products/'+uuidv4()+'.png';
            image.mv(imagePath)
            data.content.image_path = imagePath
            const product = await this.createProductUseCase.load(data.content);
            return created(product);
        } catch (error) {  
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}