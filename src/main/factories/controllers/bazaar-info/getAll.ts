import { GetBazaarInfosService } from "../../../../data/services/bazaar-info/getAll";
import { GetBazarInfosRepositorySequelize } from "../../../../infra/repositories/sequelize/bazaar-info/getAll";
import { GetBazaarInfosController } from "../../../../presentation/controllers/bazarInfo/getAll";
import { Controller } from "../../../../presentation/controllers/controller";


export const getBazaarInfoController = (): Controller => {
  const repository = new GetBazarInfosRepositorySequelize();
  const service = new GetBazaarInfosService(repository);
  return new GetBazaarInfosController(service);
}