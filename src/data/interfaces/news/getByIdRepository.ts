import { News } from "../../dto/news";

export interface GetNewsByIdRepository {
  getById(id: number): Promise<News>; 
}