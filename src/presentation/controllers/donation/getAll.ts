import { GetDonationsUseCase } from "../../../domain/useCases/donation/getAll";
import { notFound, ok, HttpResponse} from "../http";
import { Controller } from "../controller";

export class GetDonationsController implements Controller{
    constructor(
        private readonly getDonationsUseCase: GetDonationsUseCase
    ){}
    
    async handle(id: string): Promise<HttpResponse<any>>{
        try {
            const donations = await this.getDonationsUseCase.load();
            return ok(donations);
            
        } catch (error) {
            return notFound(error);
        }
    }
}