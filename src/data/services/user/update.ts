import { User } from "../../dto/user";
import { UpdateUserUseCase } from "../../../domain/useCases/user/update";
import { UpdateUserRepository } from "../../interfaces/user/updateRepository";

export class UpdateUserService implements UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository
  ){}

  async load(data: any): Promise<Boolean> {
      return await this.updateUserRepository.update(data);
  }
}