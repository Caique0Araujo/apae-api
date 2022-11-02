import { Application } from "./Application";
import express from "express";
import router from "../routes/express-routes/setupRoutes";


class ExpressApplication implements Application {
  private server: any;
  constructor(){
  }
  setupApp(): void {
    this.server = express();
  }
  setupMiddlewares(): void {
      this.server.use(express.json());
  }
  setupRouter(): void {
      this.server.use(router);
  }
  start(): void {
    this.setupApp();
    this.setupMiddlewares();
    this.setupRouter();
    this.server.listen(3000);
  }
}

export default new ExpressApplication();