import { DeleteUserUseCase } from "../../../domain/useCases/user/delete";
import { Controller } from "../controller";
import { defaultError, HttpResponse, deleted } from "../http";

export class DeleteUserController implements Controller {
  constructor(
    private readonly deleteUserUseCase: DeleteUserUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user_deleted = await this.deleteUserUseCase.load(data);
        return deleted();
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}