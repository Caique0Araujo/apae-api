import { CreateProductService } from "../../../../data/services/product/create";
import { CreateProductRepositorySequelize } from "../../../../infra/repositories/sequelize/product/create";
import { CreateProductController } from "../../../../presentation/controllers/product/create";
import { Controller } from "../../../../presentation/controllers/controller";


export const createProductController = (): Controller => {
  const repository = new CreateProductRepositorySequelize();
  const service = new CreateProductService(repository);
  return new CreateProductController(service);
}