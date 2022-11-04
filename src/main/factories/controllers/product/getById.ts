import { GetProductByIdService } from "../../../../data/services/product/getById";
import { GetProductByIdRepositorySequelize } from "../../../../infra/repositories/sequelize/product/getById";
import { GetProductByIdController } from "../../../../presentation/controllers/product/getById";
import { Controller } from "../../../../presentation/controllers/controller";

export const getProductByIdController = (): Controller => {
  const repository = new GetProductByIdRepositorySequelize();
  const service = new GetProductByIdService(repository);
  return new GetProductByIdController(service);
}