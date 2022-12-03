import { DeleteNewsRepository } from './../../interfaces/news/deleteRepository';
import { DeleteNewsUseCase } from "../../../domain/useCases/news/delete";

export class DeleteNewsService implements DeleteNewsUseCase{
  constructor(
    private readonly deleteNewsRepository: DeleteNewsRepository
  ){}

  async load(id: number): Promise<Boolean> {
      return await this.deleteNewsRepository.delete(id);
  }
}