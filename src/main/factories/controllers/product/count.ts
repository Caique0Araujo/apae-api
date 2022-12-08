import { CountProductsController } from './../../../../presentation/controllers/product/count';
import { CountProductsService } from './../../../../data/services/product/count';
import { CountProductsRepositorySequelize } from './../../../../infra/repositories/sequelize/product/count';
import { Controller } from "../../../../presentation/controllers/controller";


export const countProductsController = (): Controller => {
  const repository = new CountProductsRepositorySequelize();
  const service = new CountProductsService(repository);
  return new CountProductsController(service);
}