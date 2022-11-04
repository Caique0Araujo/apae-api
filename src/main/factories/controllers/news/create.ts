import { CreateNewsService } from "../../../../data/services/news/create";
import { CreateNewsRepositorySequelize } from "../../../../infra/repositories/sequelize/news/create";
import { CreateNewsController } from "../../../../presentation/controllers/news/create";
import { Controller } from "../../../../presentation/controllers/controller";


export const createNewsController = (): Controller => {
  const repository = new CreateNewsRepositorySequelize();
  const service = new CreateNewsService(repository);
  return new CreateNewsController(service);
}