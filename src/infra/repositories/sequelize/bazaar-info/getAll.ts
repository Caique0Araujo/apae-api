import { BazaarInfo } from "../../../../data/dto/bazaar-info";
import { GetBazarInfosRepository } from "../../../../data/interfaces/bazaar-info/getAllRepository";
import Bazaar_info from "../../../dataSource/sequelize/bazar_info";

export class GetBazarInfosRepositorySequelize implements GetBazarInfosRepository{
    async getAll(): Promise<BazaarInfo[]> {
        return await Bazaar_info.findAll({raw: true, where: {is_enabled: true }}); 
    }
}