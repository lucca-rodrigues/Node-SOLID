import { StatusCodes } from "http-status-codes";

import app from "../../../app";
import supertest from "supertest";

describe("should be running usersController", () => {
  const request = supertest(app);
  it("check if return users lits", async () => {
    const response = await request.get("/api/v1/users");

    expect(response["statusCode"]).toBe(StatusCodes.OK);
    expect(response["body"]).toEqual([]);
  });

  it("check if create user successfuly", async () => {
    const newUser = {
      name: "Jão",
      email: "email@email.com",
      password: "passwordhere",
    };
    const response = await request.post("/api/v1/users").send(newUser);

    const basePath = response["body"];
    expect(response["statusCode"]).toBe(StatusCodes.OK);
    expect(basePath).toBeTruthy();
    expect(basePath["id"]).toHaveLength(36);
    expect(basePath["name"]).toBe(newUser["name"]);
    expect(basePath["email"]).toBe(newUser["email"]);
  });
});
