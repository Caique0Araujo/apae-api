import { News } from "../../../../data/dto/news";
import { GetNewsRepository } from "../../../../data/interfaces/news/getAllRepository";
import { News as NewsSequelize } from "../../../dataSource/sequelize/news";

export class GetNewsRepositorySequelize implements GetNewsRepository{
    async getAll(data): Promise<News[]> {
        const start: number = data.start - 1;
        const limit: number = data.end - start;
        console.log(start, limit);

        return await NewsSequelize.findAll({
            raw: true, 
            limit, 
            offset: start,
            where: {is_enabled: true } 
        }); 
    }
}