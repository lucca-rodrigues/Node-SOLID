import { CreateUsersUseCase } from ".";
import { UsersInMemmoryRepository } from "../../../../tests/repository/usersInMemmoryRepository";

describe("should be testing the createUsersUseCase", () => {
  const usersInMemmoryRepository = new UsersInMemmoryRepository();
  const createUsersUseCase = new CreateUsersUseCase(usersInMemmoryRepository);
  it("check if createUsersUseCase be defined", async () => {
    expect(CreateUsersUseCase).toBeDefined();
  });
  it("check if createUsersUseCase return all users", async () => {
    const user = {
      name: "John",
      email: "john@email.com",
      password: "johnPassword123",
    };
    const response = await createUsersUseCase.execute(user);

    expect(response["id"]).toHaveLength(36);
    expect(response["name"]).toBe(user["name"]);
    expect(response["email"]).toBe(user["email"]);
    expect(response["password"]).toBeTruthy();
  });
});
