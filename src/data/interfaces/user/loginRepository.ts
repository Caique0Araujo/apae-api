import { User } from "../../dto/user";

export interface LoginRepository {
  login(data: any): Promise<User>;
}