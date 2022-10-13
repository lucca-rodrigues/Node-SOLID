import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { GetUsersUseCase } from "./getUsersUseCase";
import { GetUsersController } from "./usersController";

const databaseRepositories = new DatabaseRepositories();
const getUsersUseCase = new GetUsersUseCase(databaseRepositories);
const usersController = new GetUsersController(getUsersUseCase);

export { usersController };
