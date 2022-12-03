import { News } from "../../entities/news";

export interface GetRecentNewsUseCase{
    load(data): Promise<News[]>
}