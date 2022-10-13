import { Request, Response } from "express";
import { GetUsersUseCase } from "./getUsersUseCase";

export class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(request: Request, response: Response) {
    return this.getUsersUseCase.execute();
  }
}
