import { News } from "../../dto/news";

export interface GetRecentNewsRepository{
    getAll(data): Promise<News[]>;
}