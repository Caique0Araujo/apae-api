import { BazaarInfo } from "../../../domain/entities/bazaar-info";
import { CreateBazaarInfoUseCase } from "../../../domain/useCases/bazaar-info/create";
import { CreateBazaarInfoRepository } from "../../interfaces/bazaar-info/createRepository";

export class CreateBazaarInfoService implements CreateBazaarInfoUseCase{
    constructor(
        private readonly createBazaarInfoRepository: CreateBazaarInfoRepository
    ){}

    async load(bazarInfo: BazaarInfo): Promise<BazaarInfo> {
        return await this.createBazaarInfoRepository.create(bazarInfo);
    }
}