import { BazaarInfo } from "../../../domain/entities/bazaar-info";
import { GetBazaarInfosUseCase } from "../../../domain/useCases/bazaar-info/getAll";
import { GetBazarInfosRepository } from "../../interfaces/bazaar-info/getAllRepository";

export class GetBazaarInfosService implements GetBazaarInfosUseCase{
    constructor(
        private readonly getBazaarInfoRepository: GetBazarInfosRepository
    ){}

    async load(): Promise<BazaarInfo[]> {
        return await this.getBazaarInfoRepository.getAll();
    }
}