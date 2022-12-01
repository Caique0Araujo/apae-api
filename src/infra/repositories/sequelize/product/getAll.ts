import { Product } from "../../../../data/dto/product";
import { GetProductsRepository } from "../../../../data/interfaces/product/getAllRepository";
import Products from "../../../dataSource/sequelize/products";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";

export class GetProductsRepositorySequelize implements GetProductsRepository{
    async getAll(): Promise<Product[]> {

        const products = await Products.findAll(
            {
                raw: true, 
                where: {is_enabled: true }, 
                attributes: ['id_product', 'name', 'price', 'image_path'],
                order: [
                    ['name', 'ASC'],
                ]
            }); 

        if(!products) throw new NotFoundError();
        return products;
    }
}