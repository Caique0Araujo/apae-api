import { News } from "../../entities/news";

export interface GetNewsByIdUseCase {
  load(id: number): Promise<News>;
}