import { User } from "../../../../data/dto/user";
import { GetUsersRepository } from "../../../../data/interfaces/user/getAllRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import Users from "../../../dataSource/sequelize/user";

export class GetUsersRepositorySequelize implements GetUsersRepository {
  async getAll(): Promise<User[]> {
      const users = await Users.findAll(
        {
          raw: true,
          where: {is_enabled: true},
          attributes: ['id_user', 'name', 'login'],
        }
      )

      if(!users) throw new NotFoundError();
      return users;
  }
}