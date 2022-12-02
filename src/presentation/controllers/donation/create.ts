import { CreateDonationUseCase } from "../../../domain/useCases/donation/create";
import { badRequest, created, defaultError, HttpResponse} from "../http";
import { Controller } from "../controller";

export class CreateDonationController implements Controller{
    constructor(
        private readonly createDonationUseCase: CreateDonationUseCase
    ){}

    async handle(data: any): Promise<HttpResponse<any>> {
        try {
            const donation = await this.createDonationUseCase.load(data);
            return created(donation);
        } catch (error) {  
            if(!error.status) error.status = 500
            return defaultError(error);
        }
    }
}