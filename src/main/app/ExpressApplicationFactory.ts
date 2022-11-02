import { Application } from "./Application";
import ExpressApplication from "./ExpressApplication";

function expressApplicationFactory(): Application{
  const app = ExpressApplication;
  app.setupApp();
  app.setupMiddlewares();
  app.setupRouter();
  return app;
}


export default expressApplicationFactory();