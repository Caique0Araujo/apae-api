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
        const current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
        const expire_date_UTC = new Date(current.getTime() + 86400000); // + 1 day in ms
        return login(user, token, expire_date_UTC);
      } catch (error) {
        return badRequest(error)
      }
  }
}