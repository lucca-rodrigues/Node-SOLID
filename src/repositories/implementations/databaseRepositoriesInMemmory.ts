import { IUsersRepository } from "../IUsersRepository";
import { uuid } from "uuidv4";
import { CreateUserDto } from "../../dto/userDto";

export class DatabaseRepositoriesInMemmory implements IUsersRepository {
  public usersOnDatabase = [];

  async findAll(): Promise<any> {
    this.usersOnDatabase.forEach((element) => {
      delete element.password;
    });

    return await this.usersOnDatabase;
  }

  async save(user: CreateUserDto): Promise<any> {
    const userData = {
      id: uuid(),
      ...user,
    };
    await this.usersOnDatabase.push(userData);

    return userData;
  }
}