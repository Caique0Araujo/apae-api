import { Application } from "./Application";
import {ExpressApplication} from "./ExpressApplication";

function expressApplicationFactory(): Application{
  const app = new ExpressApplication();
  app.setupMiddlewares();
  app.setupRouter();
  return app;
}

export default expressApplicationFactory();