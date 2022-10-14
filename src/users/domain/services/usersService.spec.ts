import { UsersService } from ".";
import { usersService } from "../../index";

describe("should be testing the usersService", () => {
  it("check if usersService be defined", async () => {
    expect(usersService).toBeDefined();
  });
  it("check if usersService return all users", async () => {
    // const testService = new UsersService();
    // const response = [];
    // jest.spyOn(UsersService, "findAll").mockRejectedValueOnce();
    // jest.spyOn(UsersService, "findAll").mockRejectedValueOnce();
    // expect(usersService).toBeDefined();
  });
});
