import { DeleteProductController } from './../../../../presentation/controllers/product/delete';
import { DeleteProductService } from './../../../../data/services/product/delete';
import { DeleteProductRepositorySequelize } from './../../../../infra/repositories/sequelize/product/delete';
import { Controller } from './../../../../presentation/controllers/controller';
export const deleteProductController = (): Controller =>{
  const repository = new DeleteProductRepositorySequelize();
  const service = new DeleteProductService(repository);
  return new DeleteProductController(service);
}