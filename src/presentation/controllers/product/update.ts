import { defaultError, updated } from './../http';
import { HttpResponse } from '../http';
import { UpdateProductUseCase } from './../../../domain/useCases/product/update';
import { Controller } from './../controller';
import { NotFoundError } from '../../../domain/errors/NotFoundError';
import { v4 as uuidv4 } from 'uuid';

export class UpdateProductController implements Controller{
  constructor(
    private readonly updateProductUseCase: UpdateProductUseCase
  ){}
  
  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        if(data.file){
          let image_path = __dirname+'../../../../../photos/products/'+uuidv4()+'.png'
          data.file.mv(image_path)
          data.content.image_path = image_path
        }
        console.log(data)
        const product_updated = await this.updateProductUseCase.load(data.content);
        console.log(product_updated)
        return product_updated ? updated() : defaultError(new NotFoundError('Product'))
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}