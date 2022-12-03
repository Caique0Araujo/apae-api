export interface DeleteNewsUseCase {
  load(id: number): Promise<Boolean>;
}