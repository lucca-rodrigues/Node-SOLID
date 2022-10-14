import { GetUsersUseCase } from ".";
import { UsersInMemmoryRepository } from "../../../../tests/repository/usersInMemmoryRepository";

describe("should be testing the getUsersUseCase", () => {
  const usersInMemmoryRepository = new UsersInMemmoryRepository();
  const getUsersUseCase = new GetUsersUseCase(usersInMemmoryRepository);
  it("check if getUsersUseCase be defined", async () => {
    expect(GetUsersUseCase).toBeDefined();
  });
  it("check if getUsersUseCase return all correct params from first user", async () => {
    const response = await getUsersUseCase.execute();
    const basePath = response[0];
    expect(response).toHaveLength(1);
    expect(basePath["id"]).toEqual("7e1a70ae-faca-4a4a-b78e-9473f3b7933e");
    expect(basePath["name"]).toEqual("user in memmory");
    expect(basePath["email"]).toEqual("userinmemory@gmail.com");
  });
});
