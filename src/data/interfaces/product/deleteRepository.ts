export interface DeleteProductRepository{
  delete(id: number): Promise<Boolean>
}