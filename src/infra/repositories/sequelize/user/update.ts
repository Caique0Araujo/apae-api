import { User } from "../../../../data/dto/user";
import { UpdateUserRepository } from "../../../../data/interfaces/user/updateRepository";
import { AlreadyExistsError } from "../../../../domain/errors/AlreadyExists";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import { encrypt } from "../../../../helpers/encryption/encrypt";
import Users from "../../../dataSource/sequelize/user";
import { userExists } from "./exists";
import { loginValidation } from "./loginValidation";

export class UpdateUserRepositorySequelize implements UpdateUserRepository {
  async update(user: User): Promise<Boolean> {

    const user_exists = await userExists(user.id_user)

    if (!user_exists) throw new NotFoundError('User');

    const login_validation = await loginValidation(user.login);

    if(login_validation && user_exists.login !== user.login) throw new AlreadyExistsError('login')

    user.password = await encrypt(user.password)  

    const updated_user = await Users.update(user, {where: {id_user: user.id_user}})

    if(!updated_user) throw new Error('Erro ao atualizar usuário')

    return true

  }
}