import { encrypt } from "@shared/utils";
import { CreateUserDto } from "users/application/dto/userDto";
import { uuid } from "uuidv4";
import { IUsersRepository } from "../IUsersRepository";

export class DatabaseRepositories implements IUsersRepository {
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
      password: encrypt(user.password, 10),
    };

    await this.usersOnDatabase.push(userData);

    return userData;
  }
}
