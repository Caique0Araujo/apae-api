import { CreateBazaarInfoService } from "../../../../data/services/bazaar-info/create";
import { CreateBazaarInfoRepositorySequelize } from "../../../../infra/repositories/sequelize/bazaar-info/create";
import { CreateBazaarInfoController } from "../../../../presentation/controllers/bazarInfo/create";
import { Controller } from "../../../../presentation/controllers/controller";


export const createBazaarController = (): Controller => {
  const repository = new CreateBazaarInfoRepositorySequelize();
  const service = new CreateBazaarInfoService(repository);
  return new CreateBazaarInfoController(service);
}