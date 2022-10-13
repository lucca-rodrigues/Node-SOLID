import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { CreateUsersUseCase } from "./createUsersUseCase";
import { GetUsersUseCase } from "./getUsersUseCase";
import { UsersController } from "./usersController";

const databaseRepositories = new DatabaseRepositories();
const getUsersUseCase = new GetUsersUseCase(databaseRepositories);
const createUsersUseCase = new CreateUsersUseCase(databaseRepositories);
const usersController = new UsersController(getUsersUseCase, createUsersUseCase);

export { usersController };
