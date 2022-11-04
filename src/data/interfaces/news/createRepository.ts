import { News } from "../../dto/news";

export interface CreateNewsRepository{
    create(news: News): Promise<News>;
}