import { News } from "../../dto/news";

export interface GetNewsRepository{
    getAll(data): Promise<News[]>;
}