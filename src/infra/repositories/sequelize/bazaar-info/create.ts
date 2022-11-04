import { BazaarInfo } from "../../../../data/dto/bazaar-info";
import { CreateBazaarInfoRepository } from "../../../../data/interfaces/bazaar-info/createRepository";
import BazaarInfos from "../../../dataSource/sequelize/bazar_info";

export class CreateBazaarInfoRepositorySequelize implements CreateBazaarInfoRepository{
    async create(newBazaarInfo: BazaarInfo): Promise<BazaarInfo> {
        return await BazaarInfos.create(newBazaarInfo);
    }
}