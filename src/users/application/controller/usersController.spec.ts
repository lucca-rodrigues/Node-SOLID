// import { StatusCodes } from "http-status-codes";
// import express from "express";

import app from "../../../app";
import supertest from "supertest";
describe("should be running usersController", () => {
  it("check if return users lits", async () => {
    // const baseUrl = "http://localhostt:3333";
    // const server =request(expressServer);
    const request = supertest(app);
    const response = await request.get("/users");

    console.log(response.body);

    // expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeTruthy();
  });
});
