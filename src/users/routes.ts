import { Router } from "express";
import { usersController } from ".";

const userRoutes = Router();

userRoutes.get("/api/v1/users", (request, response) => usersController.findAll(request, response));
userRoutes.post("/api/v1/users", (request, response) => usersController.createUser(request, response));

export { userRoutes };
