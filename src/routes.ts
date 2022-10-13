import { Router } from "express";
import { usersController } from "./useCases/users";
const router = Router();

router.get("/", (req, res) => res.send({ status: "API Ok" }));
router.get("/users", (request, response) => usersController.getAll(request, response));
router.post("/users", (request, response) => usersController.createUser(request, response));
export { router };
