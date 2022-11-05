import { News } from "../../../../data/dto/news";
import { CreateNewsRepository } from "../../../../data/interfaces/news/createRepository";
import { News as news} from "../../../dataSource/sequelize/news";

export class CreateNewsRepositorySequelize implements CreateNewsRepository{
    async create(newNews: News): Promise<News> {
        newNews.created_at_utc = Date.now()
        return await news.create(newNews);
    }
}