import { News } from "../../entities/news";

export interface CreateNewsUseCase{
    load(news: News): Promise<News>;
}