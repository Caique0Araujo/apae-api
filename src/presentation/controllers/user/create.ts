import { CreateUserUseCase } from "../../../domain/useCases/user/create";
import { Controller } from "../controller";
import { badRequest, created, HttpResponse } from "../http";

export class CreateUserController implements Controller {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user = await this.createUserUseCase.load(data);
        return created(user);
      } catch (error) {
        return badRequest(error);
      }
  }
}