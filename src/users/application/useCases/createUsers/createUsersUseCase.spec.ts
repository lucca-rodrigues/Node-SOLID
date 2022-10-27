import { CreateUsersUseCase } from ".";
import { newUser } from "../../../../tests/mocks/newUser";
import { createUsersInMemmoryUseCase } from "../../../../tests/services/usersInMemmoryService";

describe("should be testing the createUsersUseCase", () => {
  const createUsersUseCase = createUsersInMemmoryUseCase;
  it("check if createUsersUseCase be defined", async () => {
    expect(CreateUsersUseCase).toBeDefined();
  });
  it("check if createUsersUseCase return all users", async () => {
    const response = await createUsersUseCase.execute(newUser);

    expect(response["id"]).toHaveLength(36);
    expect(response["name"]).toBe(newUser["name"]);
    expect(response["email"]).toBe(newUser["email"]);
    expect(response["password"]).toBeTruthy();
  });
});
