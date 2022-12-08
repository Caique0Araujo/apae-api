export interface CountNewsRepository {
  count(): Promise<number>;
}