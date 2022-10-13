import { Router } from "express";
import { usersController } from "./useCases/users";
const router = Router();

router.get("/", (req, res) => res.send({ status: "API Ok" }));
router.get("/users", usersController.handle);
export { router };
