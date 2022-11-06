import { News } from "../../entities/news";

export interface GetNewsUseCase{
    load(data): Promise<News[]>
}