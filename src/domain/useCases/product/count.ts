export interface CountProductsUseCase {
  load(): Promise<number>;
}
