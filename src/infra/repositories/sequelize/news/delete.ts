import { News } from '../../../dataSource/sequelize/news';
import { DeleteNewsRepository } from './../../../../data/interfaces/news/deleteRepository';
export class DeleteNewsRepositorySequelize implements DeleteNewsRepository{
  async delete(id: number): Promise<Boolean> {
    return await News.update({is_enabled: false}, {where: {id_news: id}}) ? true : false
  }
}