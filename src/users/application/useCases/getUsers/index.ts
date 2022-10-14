import { IUsersRepository } from "../../../../infra/db/usersRepository/IUsersRepository";
import { IGetUsersUseCase } from "./IGetUsersUseCase";
export class GetUsersUseCase implements IGetUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute() {
    return await this.usersRepository.findAll();
  }
}
