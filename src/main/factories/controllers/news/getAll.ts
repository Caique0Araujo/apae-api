import { GetNewsService } from "../../../../data/services/news/getAll";
import { GetNewsRepositorySequelize } from "../../../../infra/repositories/sequelize/news/getAll";
import { GetNewsController } from "../../../../presentation/controllers/news/getAll";
import { Controller } from "../../../../presentation/controllers/controller";


export const getNewsController = (): Controller => {
  const repository = new GetNewsRepositorySequelize();
  const service = new GetNewsService(repository);
  return new GetNewsController(service);
}