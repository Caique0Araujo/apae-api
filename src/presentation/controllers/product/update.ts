import { defaultError, updated } from './../http';
import { HttpResponse } from '../http';
import { UpdateProductUseCase } from './../../../domain/useCases/product/update';
import { Controller } from './../controller';
import { NotFoundError } from '../../../domain/errors/NotFoundError';
const rootDir = require('path').resolve('./');

export class UpdateProductController implements Controller{
  constructor(
    private readonly updateProductUseCase: UpdateProductUseCase
  ){}
  
  async handle(data: any): Promise<HttpResponse<any>> {
    const photoDir = rootDir+'/photos/products/'
    console.log(data.file)

      try {
        if(data.file){
          let image_path = photoDir+data.file.name+'.png'
          data.file.mv(image_path)
          data.content.image_path = image_path
        }
        const product_updated = await this.updateProductUseCase.load(data.content);
        return product_updated ? updated() : defaultError(new NotFoundError('Product'))
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}