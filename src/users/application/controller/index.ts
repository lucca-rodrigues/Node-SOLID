import { Request, Response } from "express";

export class UsersController {
  // constructor(private readonly getUsersUseCase: GetUsersUseCase, private readonly createUserUseCase: CreateUsersUseCase) {}
  // async getAll(_request: Request, response: Response): Promise<Response> {
  //   try {
  //     const data = await this.getUsersUseCase.execute();
  //     return response.status(200).send(data);
  //   } catch (error) {
  //     console.log("Erro ao execuar o controller", error.message);
  //   }
  // }
  // async createUser(request: Request, response: Response) {
  //   const data = request.body;
  //   response.send(await this.createUserUseCase.execute(data));
  // }

  async findAll(_request: Request, response: Response) {
    response.send({ data: "Batata" });
  }
  async create(_request: Request, response: Response) {
    response.send("Batata");
  }
}
