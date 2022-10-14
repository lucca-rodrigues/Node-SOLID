import { uuid } from "uuidv4";
import { encrypt } from "../../../@shared/utils";
import { IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  public usersOnDatabase: string[] = [];

  async findAll(): Promise<any> {
    this.usersOnDatabase.forEach((element: any) => {
      delete element.password;
    });

    return this.usersOnDatabase;
  }

  async save(user: any) {
    const userData: any = {
      id: uuid(),
      ...user,
      password: encrypt(user.password, 10),
    };

    this.usersOnDatabase.push(userData);

    return userData;
  }
}
