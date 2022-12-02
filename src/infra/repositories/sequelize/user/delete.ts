import { DeleteUserRepository } from "../../../../data/interfaces/user/deleteRepository";
import { CannotDeleteCurrentError } from "../../../../domain/errors/CannotDeleteCurrent";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import User from "../../../dataSource/sequelize/user";
import { userExists } from "./exists";

export class DeleteUserRepositorySequelize implements DeleteUserRepository {
  async delete(data: any): Promise<Boolean> {

    if(data.id == data.logged_id) throw new CannotDeleteCurrentError('user')

    console.log(data)


    if (await userExists(data.id)) throw new NotFoundError('User');
    return await User.update({is_enabled: 0}, {where: {id_user: data.id}}) ? true : false
  }
}