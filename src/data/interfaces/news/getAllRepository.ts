import { News } from "../../dto/news";

export interface GetNewsRepository{
    getAll(): Promise<News[]>;
}