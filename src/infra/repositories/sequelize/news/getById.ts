import { News } from "../../../../data/dto/news";
import { GetNewsByIdRepository } from "../../../../data/interfaces/news/getByIdRepository";
import {News as NewsRepo} from "../../../dataSource/sequelize/news";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";

export class GetNewsByIdRepositorySequelize implements GetNewsByIdRepository {
  async getById(id: number): Promise<News> {
     
      const news = await NewsRepo.findOne({
        raw: true,
        where: { id_news: id, is_enabled: true },
        attributes: ['id_news', 'title', 'text', 'image_path', 'created_at_utc'],
      })

      if(!news) throw new NotFoundError('News');

      return news;
  }
}