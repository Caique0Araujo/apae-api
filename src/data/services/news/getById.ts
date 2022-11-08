import { News } from "../../../domain/entities/news";
import { GetNewsByIdUseCase } from "../../../domain/useCases/news/getById";
import { GetNewsByIdRepository } from "../../interfaces/news/getByIdRepository";

export class GetNewsByIdService implements GetNewsByIdUseCase{
  constructor(
    private readonly getNewsByIdRepository: GetNewsByIdRepository
  ){}

  async load(id: number): Promise<News> {
      return await this.getNewsByIdRepository.getById(id);
  }
}