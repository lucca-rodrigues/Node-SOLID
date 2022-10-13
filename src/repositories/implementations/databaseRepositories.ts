import { IUsersRepository } from "../IUsersRepository";

export class DatabaseRepositories implements IUsersRepository {
  public usersOnDatabase = [];

  async findAll(): Promise<any> {
    return await this.usersOnDatabase;
  }

  async save(user): Promise<any> {
    await this.usersOnDatabase.push(user);

    return user;
  }
}
