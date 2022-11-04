import { News } from "../../../../data/dto/news";
import { GetNewsRepository } from "../../../../data/interfaces/news/getAllRepository";
import { News as NewsSequelize } from "../../../dataSource/sequelize/news";

export class GetNewsRepositorySequelize implements GetNewsRepository{
    async getAll(): Promise<News[]> {
        return await NewsSequelize.findAll({raw: true, where: {is_enabled: true }}); 
    }
}