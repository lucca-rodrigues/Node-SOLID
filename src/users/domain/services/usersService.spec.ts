import { usersService } from "../../index";
import { getDynamicUser } from "../../../tests/mocks/getDynamicUser";
import { UserEntity } from "../entities/userEntity";
describe("should be testing the usersService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("check if usersService be defined", async () => {
    expect(usersService).toBeDefined();
  });

  it("check if usersService return all users", async () => {
    const generatedUser = [getDynamicUser()];

    // jest.spyOn(usersService, "findAll").mockReturnValue(userStub);
    jest.spyOn(usersService, "findAll").mockReturnValue(generatedUser);
    const response = usersService.findAll();

    console.log(response);
    expect(response).toEqual(generatedUser);
    expect(response).toHaveLength(1);
  });
});
