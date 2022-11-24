import { User } from "../../../../data/dto/user";
import { LoginRepository } from "../../../../data/interfaces/user/loginRepository";
import { InvalidFieldError } from "../../../../domain/errors/InvalidField";
import { compare } from "../../../../helpers/encryption/compare";
import user from '../../../dataSource/sequelize/user';

export class LoginRepositorySequelize implements LoginRepository{
  async login(data: any): Promise<User> {

      const user_from_DB = await user.findOne({
        raw: true,
        where: {login: data.login, is_enabled: true}
      })

      if(!user_from_DB) throw new InvalidFieldError();

      if(await compare(user_from_DB.password, data.password)) throw new InvalidFieldError(); 

      return user_from_DB;
  }
}