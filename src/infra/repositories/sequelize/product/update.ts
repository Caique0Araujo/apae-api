import { Product } from '../../../../data/dto/product';
import Products from '../../../dataSource/sequelize/products';
import { UpdateProductRepository } from './../../../../data/interfaces/product/updateRepository';
export class UpdateProductRepositorySequelize implements UpdateProductRepository{
  async update(product: any): Promise<Boolean> {
    console.log(product)
      return await Products.update(product, {where: {id_product: product.id_product}}) ? true : false
  }
}