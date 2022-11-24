import { User } from "../../../domain/entities/user";
import { CreateUserUseCase } from "../../../domain/useCases/user/create";
import { CreateUserRepository } from "../../interfaces/user/createRepository";

export class CreateUserService implements CreateUserUseCase {
  constructor(
    private readonly createUserRespository: CreateUserRepository
  ){}
  async load(user: User): Promise<User> {
      return await this.createUserRespository.create(user);
  }
}