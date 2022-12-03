import { GetRecentNewsService } from "../../../../data/services/news/getRecent";
import { GetRecentNewsRepositorySequelize } from "../../../../infra/repositories/sequelize/news/getRecent";
import { GetRecentNewsController } from "../../../../presentation/controllers/news/getRecent";
import { Controller } from "../../../../presentation/controllers/controller";


export const getRecentNewsController = (): Controller => {
  const repository = new GetRecentNewsRepositorySequelize();
  const service = new GetRecentNewsService(repository);
  return new GetRecentNewsController(service);
}