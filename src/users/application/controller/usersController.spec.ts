import { StatusCodes } from "http-status-codes";

import app from "../../../app";
import supertest from "supertest";

describe("should be running usersController", () => {
  const request = supertest(app);
  it("check if return users lits", async () => {
    const response = await request.get("/api/v1/users");

    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toEqual([]);
  });
});
