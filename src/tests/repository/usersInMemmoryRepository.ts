import { uuid } from "uuidv4";
import { encrypt } from "../../@shared/utils";
import { IUsersRepository } from "../../infra/db/usersRepository/IUsersRepository";

export class UsersInMemmoryRepository implements IUsersRepository {
  public databaseInMemmory = [
    {
      id: "7e1a70ae-faca-4a4a-b78e-9473f3b7933e",
      name: "user in memmory",
      email: "userinmemory@gmail.com",
      password: "passwordinmemmory",
    },
  ];

  async findAll(): Promise<any> {
    this.databaseInMemmory.forEach((element: any) => {
      delete element.password;
    });

    return this.databaseInMemmory;
  }

  async save(user: any) {
    const userData: any = {
      id: uuid(),
      ...user,
      password: encrypt(user.password, 10),
    };

    this.databaseInMemmory.push(userData);

    return userData;
  }
}
