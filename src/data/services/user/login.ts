import { User } from "../../../domain/entities/user";
import { LoginUseCase } from "../../../domain/useCases/user/login";
import { LoginRepository } from "../../interfaces/user/loginRepository";

export class LoginService implements LoginUseCase {
  constructor(
    private readonly loginRepository: LoginRepository
  ){}

  async load(data: any): Promise<User> {
      return await this.loginRepository.login(data);
  }
}