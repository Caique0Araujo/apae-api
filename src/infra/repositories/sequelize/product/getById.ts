import { Product } from "../../../../data/dto/product";
import { GetProductByIdRepository } from "../../../../data/interfaces/product/getByIdRepository";
import Products from "../../../dataSource/sequelize/products";

export class GetProductByIdRepositorySequelize implements GetProductByIdRepository {
  async getById(id: number): Promise<Product> {
     
      const product = await Products.findOne({
        raw: true,
        where: { id_product: id, is_enabled: true },
      })

      if(!product)
        throw Error("Produto não encontrado");

      return product;
  }
}