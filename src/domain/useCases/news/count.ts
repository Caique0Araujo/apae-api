export interface CountNewsUseCase {
  load(): Promise<number>
}