import { User } from "../../../../data/dto/user";
import { CreateUserRepository } from "../../../../data/interfaces/user/createRepository";
import { AlreadyExistsError } from "../../../../domain/errors/AlreadyExists";
import { encrypt } from "../../../../helpers/encryption/encrypt";
import user from '../../../dataSource/sequelize/user';
import { loginValidation } from "./loginValidation";

export class CreateUserRepositorySequelize implements CreateUserRepository{
  async create(newUser: User): Promise<User> {


    if(await loginValidation(newUser.login)) throw new AlreadyExistsError('login');

    newUser.password = await encrypt(newUser.password); 

    return await user.create(newUser);
  }
}