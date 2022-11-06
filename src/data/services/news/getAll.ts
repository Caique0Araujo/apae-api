import { News } from "../../../domain/entities/news";
import { GetNewsUseCase } from "../../../domain/useCases/news/getAll";
import { GetNewsRepository } from "../../interfaces/news/getAllRepository";

export class GetNewsService implements GetNewsUseCase{
    constructor(
        private readonly getNewsRepository: GetNewsRepository
    ){}

    async load(data): Promise<News[]> {
        return await this.getNewsRepository.getAll(data);
    }
}