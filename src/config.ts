import { Application } from "./main/app/Application";
import expressApplicationFactory from "./main/app/ExpressApplicationFactory";

function setupApplication(): Application{
  return expressApplicationFactory;
}

export default setupApplication;