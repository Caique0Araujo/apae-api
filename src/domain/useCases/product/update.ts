export interface UpdateProductUseCase {
  load(data: any): Promise<Boolean>;
}