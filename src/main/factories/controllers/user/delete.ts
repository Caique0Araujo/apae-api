import { DeleteUserService } from "../../../../data/services/user/delete";
import { DeleteUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/delete";
import { Controller } from "../../../../presentation/controllers/controller";
import { DeleteUserController } from "../../../../presentation/controllers/user/delete";

export const deleteUserController = (): Controller => {
  const repository = new DeleteUserRepositorySequelize();
  const service = new DeleteUserService(repository);
  return new DeleteUserController(service);
}