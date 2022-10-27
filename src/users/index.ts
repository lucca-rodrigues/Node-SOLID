import { UsersRepository } from "../infra/db/usersRepository";
import { UsersController } from "./application/controller";
import { CreateUsersUseCase } from "./application/useCases/createUsers";
import { GetUsersUseCase } from "./application/useCases/getUsers";

import { UsersService } from "./domain/services";

const usersRepository = new UsersRepository();
const getUsersUseCase = new GetUsersUseCase(usersRepository);
const createUsersUseCase = new CreateUsersUseCase(usersRepository);
const usersService = new UsersService(getUsersUseCase, createUsersUseCase);
const usersController = new UsersController(usersService);

export { usersController, usersService };
