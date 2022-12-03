import { DeleteNewsService } from '../../../../data/services/news/delete';
import { DeleteNewsController } from '../../../../presentation/controllers/news/delete';
import { DeleteNewsRepositorySequelize } from './../../../../infra/repositories/sequelize/news/delete';
import { Controller } from './../../../../presentation/controllers/controller';
export const deleteNewsController = (): Controller => {
  const repository = new DeleteNewsRepositorySequelize();
  const service = new DeleteNewsService(repository);
  return new DeleteNewsController(service);
}