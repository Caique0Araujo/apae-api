import { GetProductsUseCase } from "../../../domain/useCases/product/getAll";
import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";

export class GetProductsController implements Controller{
    constructor(
        private readonly getProductsUseCase: GetProductsUseCase
    ){}
    
    async handle(): Promise<HttpResponse<any>>{
        try {
            const products = await this.getProductsUseCase.load();
            return ok(products);
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}