import { GetNewsUseCase } from './../../../domain/useCases/news/getAll';
import { News } from "../../../domain/entities/news";
import { GetRecentNewsUseCase } from "../../../domain/useCases/news/getRecent";
import { GetRecentNewsRepository } from "../../interfaces/news/getRecentRepository";
import { GetNewsRepository } from '../../interfaces/news/getAllRepository';

export class GetNewsService implements GetNewsUseCase{
    constructor(
        private readonly getNewsRepository: GetNewsRepository
    ){}

    async load(): Promise<News[]> {
        return await this.getNewsRepository.getAll();
    }
}