import { NotFoundError } from '../../../../domain/errors/NotFoundError';
import Product from '../../../dataSource/sequelize/products';
import { DeleteProductRepository } from './../../../../data/interfaces/product/deleteRepository';
export class DeleteProductRepositorySequelize implements DeleteProductRepository{
  async delete(id: number): Promise<Boolean> {
      return await Product.update({is_enabled: false}, {where: {id_product: id}}) ? true : false
  }
}