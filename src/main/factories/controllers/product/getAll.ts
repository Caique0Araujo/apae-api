import { GetProductsService } from "../../../../data/services/product/getAll";
import { GetProductsRepositorySequelize } from "../../../../infra/repositories/sequelize/product/getAll";
import { GetProductsController } from "../../../../presentation/controllers/product/getAll";
import { Controller } from "../../../../presentation/controllers/controller";


export const getProductsController = (): Controller => {
  const repository = new GetProductsRepositorySequelize();
  const service = new GetProductsService(repository);
  return new GetProductsController(service);
}