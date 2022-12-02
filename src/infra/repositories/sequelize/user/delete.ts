import { DeleteUserRepository } from "../../../../data/interfaces/user/deleteRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import User from "../../../dataSource/sequelize/user";
import { userExists } from "./exists";

export class DeleteUserRepositorySequelize implements DeleteUserRepository {
  async delete(data: any): Promise<Boolean> {

    if (await userExists(data.id)) throw new NotFoundError('User');
    return await User.update({is_enabled: 0}, {where: {id_user: data.id}}) ? true : false
      
  }
}