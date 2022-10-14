import { CreateUsersUseCase } from "../../users/application/useCases/createUsers";
import { UsersInMemmoryRepository } from "../repository/usersInMemmoryRepository";

const usersInMemmoryRepository = new UsersInMemmoryRepository();
const createUsersInMemmoryUseCase = new CreateUsersUseCase(usersInMemmoryRepository);

export { createUsersInMemmoryUseCase };
