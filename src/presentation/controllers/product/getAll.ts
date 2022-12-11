import { GetProductsUseCase } from "../../../domain/useCases/product/getAll";
import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";
import fs from 'fs'

export class GetProductsController implements Controller{
    constructor(
        private readonly getProductsUseCase: GetProductsUseCase
    ){}
    
    async handle(): Promise<HttpResponse<any>>{
        try {
            const products:any = await this.getProductsUseCase.load();
            products.map((product) => {
                product.image_path = fs.readFileSync(product.image_path);
                product.image_path = Buffer.from(product.image_path).toString('base64')
                product.price =  parseFloat(product.price)
            })
            return ok(products);
            
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}