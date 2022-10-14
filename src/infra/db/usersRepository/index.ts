import { uuid } from "uuidv4";
import { encrypt } from "../../../@shared/utils";

export class UsersRepository {
  public usersOnDatabase = [];

  async findAll(): Promise<any> {
    this.usersOnDatabase.forEach((element) => {
      delete element.password;
    });

    return await this.usersOnDatabase;
  }

  async save(user: any) {
    const userData = {
      id: uuid(),
      ...user,
      password: encrypt(user.password, 10),
    };

    this.usersOnDatabase.push(userData);

    return userData;
  }
}
