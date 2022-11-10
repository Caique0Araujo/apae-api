import { News } from "../../../../data/dto/news";
import { GetNewsRepository } from "../../../../data/interfaces/news/getAllRepository";
import { News as NewsSequelize } from "../../../dataSource/sequelize/news";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";

export class GetNewsRepositorySequelize implements GetNewsRepository{
    async getAll(data: any): Promise<News[]> {
        const start: number = parseInt(data.start);
        const limit: number = (data.end - data.start);

        const news = await NewsSequelize.findAll({
            order: [
                ['created_at_utc', 'DESC'],
            ],
            raw: true, 
            limit: limit, 
            offset: start,
            where: {is_enabled: true } 
        }); 

        if(!news){
            throw new NotFoundError();
        }

        return news;
    }
}