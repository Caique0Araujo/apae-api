import { UpdateUserUseCase } from "../../../domain/useCases/user/update";
import { Controller } from "../controller";
import { HttpResponse, serverError, updated } from "../http";

export class UpdateUserController implements Controller {
  constructor(
    private readonly updateUserUseCase: UpdateUserUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        await this.updateUserUseCase.load(data)
        return updated();
      } catch (error) {
        return serverError(error);
      }
  }
}