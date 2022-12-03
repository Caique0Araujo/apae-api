export interface DeleteNewsRepository {
  delete(id: number): Promise<Boolean>
}