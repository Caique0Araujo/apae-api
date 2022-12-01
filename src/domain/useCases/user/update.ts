import { User } from "../../entities/user";

export interface UpdateUserUseCase{
    load(data: any): Promise<Boolean>
}