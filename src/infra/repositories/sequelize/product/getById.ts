import { Product } from "../../../../data/dto/product";
import { GetProductByIdRepository } from "../../../../data/interfaces/product/getByIdRepository";
import Products from "../../../dataSource/sequelize/products";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";

export class GetProductByIdRepositorySequelize implements GetProductByIdRepository {
  async getById(id: number): Promise<Product> {
     
      const product = await Products.findOne({
        raw: true,
        where: { id_product: id, is_enabled: true },
        attributes: ['id_product', 'name', 'description', 'price', 'image_path'],
      })

      if(!product)
        throw new NotFoundError();

      return product;
  }
}