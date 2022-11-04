import { News } from "../../entities/news";

export interface GetNewsUseCase{
    load(): Promise<News[]>
}