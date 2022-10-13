import { StatusCodes } from "http-status-codes";

import app from "../../../app";
import supertest from "supertest";

const request = supertest(app);
describe("should be running usersController", () => {
  it("check if return users lits", async () => {
    const response = await request.get("/users");

    console.log(response.body);

    const responseBody = { data: "Batata" };

    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toEqual(responseBody);
  });
});
