import { Request, Response } from "express";
import { UsersController } from "./application/controller";
// const databaseRepositories = new DatabaseRepositories();
// const getUsersUseCase = new GetUsersUseCase(databaseRepositories);
// const createUsersUseCase = new CreateUsersUseCase(databaseRepositories);
// const usersController = new UsersController(getUsersUseCase, createUsersUseCase);
const usersModule = new UsersController();

export { usersModule };
