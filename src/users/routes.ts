import { Router } from "express";
import { usersModule } from ".";

const userRoutes = Router();

userRoutes.get("/api/v1/users", (request, response) => usersModule.findAll(request, response));
userRoutes.post("/api/v1/users", (request, response) => usersModule.createUser(request, response));

export { userRoutes };
