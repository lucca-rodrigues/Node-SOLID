import { StatusCodes } from "http-status-codes";

import app from "../../../app";
import supertest from "supertest";
import { newUser } from "../../../tests/mocks/newUser";

describe("should be running usersController", () => {
  const request = supertest(app);
  it("check if create user successfuly", async () => {
    const response = await request.post("/api/v1/users").send(newUser);

    const basePath = response["body"];
    expect(response["statusCode"]).toBe(StatusCodes.OK);
    expect(basePath).toBeTruthy();
    expect(basePath["id"]).toHaveLength(36);
    expect(basePath["name"]).toBe(newUser["name"]);
    expect(basePath["email"]).toBe(newUser["email"]);
  });

  it("check if return users lits", async () => {
    const response = await request.get("/api/v1/users");

    const basePath = response["body"][0];

    expect(response["statusCode"]).toBe(StatusCodes.OK);
    expect(basePath["id"]).toHaveLength(36);
    expect(basePath["name"]).toBeTruthy();
    expect(basePath["email"]).toBeTruthy();
  });
});
