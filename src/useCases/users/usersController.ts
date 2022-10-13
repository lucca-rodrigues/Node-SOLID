import { Request, Response } from "express";
import { GetUsersUseCase } from "./getUsersUseCase";

export class UsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle() {
    const data = {
      id: "1234a538f45f83r",
      name: "Lucas",
    };

    return data;
    // response.send(this.getUsersUseCase.execute);
    // response.send(data);
  }
}
