import { GetNewsByIdService } from "../../../../data/services/news/getById";
import { GetNewsByIdRepositorySequelize } from "../../../../infra/repositories/sequelize/news/getById";
import { GetNewsByIdController } from "../../../../presentation/controllers/news/getById";
import { Controller } from "../../../../presentation/controllers/controller";

export const getNewsByIdController = (): Controller => {
  const repository = new GetNewsByIdRepositorySequelize();
  const service = new GetNewsByIdService(repository);
  return new GetNewsByIdController(service);
}