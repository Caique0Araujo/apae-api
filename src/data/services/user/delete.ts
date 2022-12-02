import { DeleteUserUseCase } from "../../../domain/useCases/user/delete";
import { DeleteUserRepository } from "../../interfaces/user/deleteRepository";

export class DeleteUserService implements DeleteUserUseCase {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository
  ){}

  async load(id: number): Promise<Boolean> {
      return await this.deleteUserRepository.delete(id);
  }
}