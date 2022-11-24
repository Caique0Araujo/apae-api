import { GetUserByIdUseCase } from "../../../domain/useCases/user/getById";
import { Controller } from "../controller";
import { HttpResponse, serverError, ok } from "../http";

export class GetUserByIdController implements Controller {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user = await this.getUserByIdUseCase.load(data.id);
        return ok (user);
      } catch (error) {
        return serverError(error);
      }
  }
}