import { User } from "../../../domain/entities/user";
import { GetUsersUseCase } from "../../../domain/useCases/user/getAll";
import { GetUsersRepository } from "../../interfaces/user/getAllRepository";

export class GetUsersService implements GetUsersUseCase {
  constructor(
    private readonly getUsersRepository: GetUsersRepository
  ){}

  async load(): Promise<User[]> {
      return await this.getUsersRepository.getAll();
  }
}