import { CreateUserService } from "../../../../data/services/user/create";
import { CreateUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/create";
import { Controller } from "../../../../presentation/controllers/controller";
import { CreateUserController } from "../../../../presentation/controllers/user/create";

export const createUserController = (): Controller => {
  const repository = new CreateUserRepositorySequelize();
  const service = new CreateUserService(repository);
  return new CreateUserController(service);
}