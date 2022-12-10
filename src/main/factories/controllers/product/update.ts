import { UpdateProductController } from './../../../../presentation/controllers/product/update';
import { UpdateProductService } from './../../../../data/services/product/update';
import { UpdateProductRepositorySequelize } from './../../../../infra/repositories/sequelize/product/update';
import { Controller } from './../../../../presentation/controllers/controller';
export const updateProductController = (): Controller => {
  const repository = new UpdateProductRepositorySequelize();
  const service = new UpdateProductService(repository);
  return new UpdateProductController(service);
}