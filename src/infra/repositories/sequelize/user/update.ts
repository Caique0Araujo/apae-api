import { User } from "../../../../data/dto/user";
import { UpdateUserRepository } from "../../../../data/interfaces/user/updateRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import { encrypt } from "../../../../helpers/encryption/encrypt";
import Users from "../../../dataSource/sequelize/user";
import { userExists } from "./exists";

export class UpdateUserRepositorySequelize implements UpdateUserRepository {
  async update(user: User): Promise<Boolean> {

    if (await userExists(user.id_user)) throw new NotFoundError('User');

    user.password = await encrypt(user.password)  

    const updated_user = await Users.update(user, {where: {id_user: user.id_user}})

    if(!updated_user) throw new Error('Erro ao atualizar usuário')

    return true

  }
}