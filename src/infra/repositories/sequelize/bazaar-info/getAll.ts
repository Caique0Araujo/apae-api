import { BazaarInfo } from "../../../../data/dto/bazaar-info";
import { GetBazarInfosRepository } from "../../../../data/interfaces/bazaar-info/getAllRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import Bazaar_info from "../../../dataSource/sequelize/bazar_info";

export class GetBazarInfosRepositorySequelize implements GetBazarInfosRepository{
    async getAll(): Promise<BazaarInfo[]> {

        const bazar_infos = await Bazaar_info.findAll({raw: true, where: {is_enabled: true }})

        if(!bazar_infos) throw new NotFoundError('Bazaar infos')

        return bazar_infos
    }
}