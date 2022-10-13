import { DatabaseRepositories } from "../../repositories/implementations/databaseRepositories";
import { GetUsersUseCase } from "./getUsersUseCase";
import { UsersController } from "./usersController";

// const databaseRepositories = new DatabaseRepositories();
const getUsersUseCase = new GetUsersUseCase();
const usersController = new UsersController(getUsersUseCase);

export { usersController };
