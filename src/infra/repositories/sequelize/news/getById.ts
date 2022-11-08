import { News } from "../../../../data/dto/news";
import { GetNewsByIdRepository } from "../../../../data/interfaces/news/getByIdRepository";
import {News as NewsRepo} from "../../../dataSource/sequelize/news";

export class GetNewsByIdRepositorySequelize implements GetNewsByIdRepository {
  async getById(id: number): Promise<News> {
     
      const news = await NewsRepo.findOne({
        raw: true,
        where: { id_news: id, is_enabled: true },
      })

      if(!news)
        throw Error("Notícia não encontrado");

      return news;
  }
}