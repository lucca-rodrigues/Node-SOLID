import { Router } from "express";
import { usersModule } from ".";

const userRoutes = Router();

userRoutes.get("/users", (request, response) => usersModule.findAll(request, response));
userRoutes.post("/users", (request, response) => usersModule.create(request, response));

export { userRoutes };
