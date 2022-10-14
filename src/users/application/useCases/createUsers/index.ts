import { IUsersRepository } from "../../../../infra/db/usersRepository/IUsersRepository";
import { ICreateUsersUseCase } from "./ICreateUsersUseCase";
export class CreateUsersUseCase implements ICreateUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(data: any) {
    return await this.usersRepository.save(data);
  }
}
