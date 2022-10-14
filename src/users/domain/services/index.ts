import { ICreateUsersUseCase } from "../../application/useCases/createUsers/ICreateUsersUseCase";
import { IGetUsersUseCase } from "../../application/useCases/getUsers/IGetUsersUseCase";
import { IUsersService } from "./IUsersService";

export class UsersService implements IUsersService {
  constructor(private getUsersUseCase: IGetUsersUseCase, private createUsersUseCase: ICreateUsersUseCase) {}

  findAll() {
    return this.getUsersUseCase.execute();
  }
  createUser(data: any) {
    return this.createUsersUseCase.execute(data);
  }
}
