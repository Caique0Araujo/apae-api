import { GetBazaarInfosUseCase } from "../../../domain/useCases/bazaar-info/getAll";
import { notFound, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";

export class GetBazaarInfosController implements Controller{
    constructor(
        private readonly getBazaarInfosUseCase: GetBazaarInfosUseCase
    ){}
    
    async handle(id: string): Promise<HttpResponse<any>>{
        try {
            const bazaarInfo = await this.getBazaarInfosUseCase.load();
            return ok(bazaarInfo);
            
        } catch (error) {
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}