import { CountNewsUseCase } from "../../../domain/useCases/news/count";
import { CountNewsRepository } from "../../interfaces/news/countsRepository";

export class CountNewsService implements CountNewsUseCase {
  constructor(
    private readonly countNewsRepository: CountNewsRepository
  ){}
  async load(): Promise<number> {
      return await this.countNewsRepository.count();
  }
}