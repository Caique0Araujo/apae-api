import { News } from "../../../../data/dto/news";
import { GetNewsRepository } from "../../../../data/interfaces/news/getAllRepository";
import { News as NewsSequelize } from "../../../dataSource/sequelize/news";

export class GetNewsRepositorySequelize implements GetNewsRepository{
    async getAll(data: any): Promise<News[]> {
        const start: number = parseInt(data.start);
        const limit: number = (data.end - data.start);

        return await NewsSequelize.findAll({
            raw: true, 
            limit: limit, 
            offset: start,
            where: {is_enabled: true } 
        }); 
    }
}