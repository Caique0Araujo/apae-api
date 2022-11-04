import { Application } from "./Application";
import express from "express";
import router from "../routes/express-routes/setupRoutes";
import { databaseFactory } from "../factories/app/setDatabase";
export class ExpressApplication implements Application {
  private server: any;
  private databaseConnection: any;
  constructor(){
    this.server = express();
  }
  setupMiddlewares(): void {
      this.server.use(express.json());
      // Instalar pacotes
      /*this.server.use(cors({
        origin: 'http://localhost:5000/'
      }));
      this.server.use(helmet());*/
  }
  setupRouter(): void {
      this.server.use(router);
  }
  setupDatabase(): void {
    this.databaseConnection = databaseFactory()
  }
  start(): void {
    this.setupMiddlewares();
    this.setupRouter();
    this.setupDatabase();
    this.databaseConnection.connection.sync()
        .then(() => {
            const port = process.env.SERVER_PORT
            this.server.listen( 
              port || 3000
              //, ()=>console.log('API running on port:',port)
            );
          })
          .catch((err) => {
            console.log(err);
          });
  }
}
