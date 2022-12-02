import { CreateProductUseCase } from "../../../domain/useCases/product/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateProductController implements Controller{
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const product = await this.createProductUseCase.load(data.content);
            return created(product);
        } catch (error) {  
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}