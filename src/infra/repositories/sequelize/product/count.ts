import { NotFoundError } from '../../../../domain/errors/NotFoundError';
import Product from '../../../dataSource/sequelize/products';
import { CountProductsRepository } from './../../../../data/interfaces/product/countRepository';
export class CountProductsRepositorySequelize implements CountProductsRepository {
  async count(): Promise<number> {
      const products_quantity = await Product.count({where: {is_enabled: true}})
      if(!products_quantity) throw new NotFoundError('Products');
      return products_quantity
  }
}