import { User } from "../../../../data/dto/user";
import { GetUserByIdRepository } from "../../../../data/interfaces/user/getByIdRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import user from '../../../dataSource/sequelize/user';

export class GetUserByIdRepositorySequelize implements GetUserByIdRepository{
  async getById(id: number): Promise<User> {
      const user_from_DB = await user.findOne({
        raw: true,
        where: {id_user: id, is_enabled: true}
      })
      if(!user_from_DB) throw new NotFoundError()
      return user_from_DB;
  }
}