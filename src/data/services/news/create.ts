import { News } from "../../../domain/entities/news";
import { CreateNewsUseCase } from "../../../domain/useCases/news/create";
import { CreateNewsRepository } from "../../interfaces/news/createRepository";

export class CreateNewsService implements CreateNewsUseCase{
    constructor(
        private readonly createNewsRepository: CreateNewsRepository
    ){}

    async load(News: News): Promise<News> {
        return await this.createNewsRepository.create(News);
    }
}