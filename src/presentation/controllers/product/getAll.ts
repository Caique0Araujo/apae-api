import { GetProductsUseCase } from "../../../domain/useCases/product/getAll";
import { notFound, ok, HttpResponse} from "../http";
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
            return notFound(error);
        }
    }
}