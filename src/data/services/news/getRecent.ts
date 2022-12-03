import { News } from "../../../domain/entities/news";
import { GetRecentNewsUseCase } from "../../../domain/useCases/news/getRecent";
import { GetRecentNewsRepository } from "../../interfaces/news/getRecentRepository";

export class GetRecentNewsService implements GetRecentNewsUseCase{
    constructor(
        private readonly getRecentNewsRepository: GetRecentNewsRepository
    ){}

    async load(data): Promise<News[]> {
        return await this.getRecentNewsRepository.getAll(data);
    }
}