import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute() {
    try {
      const usersList = this.usersRepository.findAll();

      if (!usersList) {
        throw new Error(`Users not found`);
      }
      return usersList;
    } catch (error) {
      console.log("Erro ao executar o useCase", error.message);
    }
  }
}
