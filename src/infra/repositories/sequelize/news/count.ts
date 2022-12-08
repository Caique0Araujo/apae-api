import { NotFoundError } from '../../../../domain/errors/NotFoundError';
import { News } from '../../../dataSource/sequelize/news';
import { CountNewsRepository } from './../../../../data/interfaces/news/countsRepository';
export class CountNewsRepositorySequelize implements CountNewsRepository {
  async count(): Promise<number> {
      const news_quantity = await News.count({where: {is_enabled: true}})
      if(!news_quantity) throw new NotFoundError('News');
      return news_quantity
  }
}