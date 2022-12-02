import { CreateBazaarInfoUseCase } from "../../../domain/useCases/bazaar-info/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateBazaarInfoController implements Controller{
    constructor(
        private readonly createBazaarInfoUseCase: CreateBazaarInfoUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const bazaarInfo = await this.createBazaarInfoUseCase.load(data);
            return created(bazaarInfo);
        } catch (error) { 
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}