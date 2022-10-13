import { Router } from "express";
import { usersModule } from ".";

const userRoutes = Router();

userRoutes.get("/users", usersModule.findAll);
userRoutes.post("/users", usersModule.create);

export { userRoutes };
