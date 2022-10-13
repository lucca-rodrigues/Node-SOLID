import { Request, Response } from "express";
import { GetUsersUseCase } from "./getUsersUseCase";

export class UsersController {
  constructor(private readonly getUsersUseCase: GetUsersUseCase) {}

  async getAll(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.getUsersUseCase.execute();
      return response.status(200).send(data);
    } catch (error) {
      console.log("Erro ao execuar o controller", error.message);
    }
  }
}
