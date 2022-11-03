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
    const generatedUser = getDynamicUser();

    jest.spyOn(usersService, "findAll").mockReturnValue(generatedUser);
    const response = usersService.findAll();

    expect(response).toEqual(generatedUser);
    expect(response["id"]).toBeTruthy();
    expect(response["name"]).toBeTruthy();
    expect(response["email"]).toBeTruthy();
  });

  it("check if usersService return multiple users", async () => {
    const quantityUsers = 3;

    const arrayUsers: UserEntity[] = [];

    for (let index = 0; index < quantityUsers; index++) {
      arrayUsers.push(getDynamicUser());
    }

    jest.spyOn(usersService, "findAll").mockReturnValue(arrayUsers);
    const response = usersService.findAll();

    expect(response).toEqual(arrayUsers);
    expect(response).toHaveLength(quantityUsers);
  });
});
