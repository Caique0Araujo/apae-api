import { CreateProductUseCase } from "../../../domain/useCases/product/create";
import { badRequest, created, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateProductController implements Controller{
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const product = await this.createProductUseCase.load(data);
            return created(product);
        } catch (error) {  
            return badRequest(error);
        }
    }
}