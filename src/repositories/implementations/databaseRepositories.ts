import { IUsersRepository } from "../IUsersRepository";

export class DatabaseRepositories implements IUsersRepository {
  private usersOnDatabase = [
    {
      id: "1234a538f45f83r",
      name: "Lucas",
    },
  ];

  async findAll(): Promise<any> {
    return await this.usersOnDatabase;
  }

  async save(user): Promise<any> {
    return await this.usersOnDatabase.push(user);
  }
}
