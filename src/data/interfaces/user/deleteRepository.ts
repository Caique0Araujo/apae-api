import { User } from "../../dto/user";

export interface DeleteUserRepository{
  delete(id: number): Promise<Boolean>;
}