import { Request, Response } from "express";
import { IUsersService } from "../../domain/services/IUsersService";

import { IGetUsersUseCase } from "../useCases/getUsers/IGetUsersUseCase";

export class UsersController {
  constructor(private readonly usersService: IUsersService) {}

  async findAll(_request: Request, response: Response) {
    const data = await this.usersService.findAll();
    response.send(data);
  }
  async createUser(request: Request, response: Response) {
    const requestData = request.body;
    const data = await this.usersService.createUser(requestData);
    response.send(data);
  }
}
