import { News } from "../../../../data/dto/news";
import { GetRecentNewsRepository } from "../../../../data/interfaces/news/getRecentRepository";
import { News as NewsSequelize } from "../../../dataSource/sequelize/news";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";

export class GetRecentNewsRepositorySequelize implements GetRecentNewsRepository{
    async getAll(data: any): Promise<News[]> {
        const news = await NewsSequelize.findAll({
            order: [
                ['created_at_utc', 'DESC'],
            ],
            raw: true, 
            where: {is_enabled: true } 
        }); 

        if(!news) throw new NotFoundError('News');
        return news;
    }
}