import { News } from '../../../../data/dto/news';
import { NotFoundError } from '../../../../domain/errors/NotFoundError';
import { News as NewsSequelize } from '../../../dataSource/sequelize/news';
import { GetNewsRepository } from './../../../../data/interfaces/news/getAllRepository';
export class GetNewsRepositorySequelize implements GetNewsRepository{
  async getAll(): Promise<News[]> {
    const news = await NewsSequelize.findAll({
      raw: true,
      where: {is_enabled: true } 
    }); 

    if(!news) throw new NotFoundError('News');
    return news

  }
}