import { CreateUserDto } from "../../dto/userDto";
import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: CreateUserDto) {
    try {
      // if (!data) {
      //   throw new Error(`You need insert user info to create new user sucessfully`);
      // }
      const user = this.usersRepository.save(data);
      return user;
    } catch (error) {
      console.log("Erro ao executar o useCase", error.message);
    }
  }
}
