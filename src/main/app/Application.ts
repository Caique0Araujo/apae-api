export interface Application {
  setupApp(): void;
  setupMiddlewares(): void;
  setupRouter(): void;
  start():void ;
}