export interface DeleteProductUseCase {
  load(id: number): Promise<Boolean>;
}