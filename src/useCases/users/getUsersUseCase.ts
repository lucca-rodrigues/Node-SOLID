import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUsersUseCase {
  // constructor(private usersRepository: IUsersRepository) {}
  // constructor(private usersRepository: DatabaseRepositories) {}

  execute() {
    return {
      id: "1234a538f45f83r",
      name: "Lucas",
    };
  }
  //   try {
  //     // const usersList = this.usersRepository.findAll();

  //     // if (!usersList) {
  //     //   throw new Error(`Users not found`);
  //     // }
  //     return {
  //       id: "1234a538f45f83r",
  //       name: "Lucas",
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
