import { LoginUseCase } from "../../../domain/useCases/user/login";
import { compare } from "../../../helpers/encryption/compare";
import { generateJwtToken } from "../../../helpers/token/generateJwt";
import { Controller } from "../controller";
import { badRequest, HttpResponse, login } from "../http";

export class LoginController implements Controller {
  constructor(
    private readonly loginUseCase: LoginUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user = await this.loginUseCase.load(data);
        const token = await generateJwtToken(user.id_user);
        return login(user, token);
      } catch (error) {
        return badRequest(error)
      }
  }
}