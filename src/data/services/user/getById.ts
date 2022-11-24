import { User } from "../../../domain/entities/user";
import { GetUserByIdUseCase } from "../../../domain/useCases/user/getById";
import { GetUserByIdRepository } from "../../interfaces/user/getByIdRepository";

export class GetUserByIdService implements GetUserByIdUseCase {
  constructor(
    private readonly getUserByIdRepository: GetUserByIdRepository
  ){}
  async load(id: number): Promise<User> {
      return await this.getUserByIdRepository.getById(id);
  }
}