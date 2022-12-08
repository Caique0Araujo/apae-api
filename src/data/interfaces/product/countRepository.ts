export interface CountProductsRepository{
    count(): Promise<number>;
}