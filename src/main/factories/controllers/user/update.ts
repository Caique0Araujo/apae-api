import { UpdateUserService } from "../../../../data/services/user/update";
import { UpdateUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/update";
import { Controller } from "../../../../presentation/controllers/controller";
import { UpdateUserController } from "../../../../presentation/controllers/user/update";

export const updateUsersController = (): Controller => {
  const repository = new UpdateUserRepositorySequelize();
  const service = new UpdateUserService(repository);
  return new UpdateUserController(service);
}