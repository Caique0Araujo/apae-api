import { CountNewsService } from '../../../../data/services/news/count';
import { CountNewsController } from '../../../../presentation/controllers/news/count';
import { CountNewsRepositorySequelize } from './../../../../infra/repositories/sequelize/news/count';
import { Controller } from './../../../../presentation/controllers/controller';
export const countNewsController = ():Controller =>{
  const repository = new CountNewsRepositorySequelize();
  const service = new CountNewsService(repository);
  return new CountNewsController(service);
}