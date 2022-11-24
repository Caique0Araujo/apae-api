import { LoginService } from "../../../../data/services/user/login";
import { LoginRepositorySequelize } from "../../../../infra/repositories/sequelize/user/login";
import { LoginController } from "../../../../presentation/controllers/auth/login";
import { Controller } from "../../../../presentation/controllers/controller";

export const loginController = ():Controller => {
  const repository = new LoginRepositorySequelize();
  const service = new LoginService(repository);
  return new LoginController(service);
}