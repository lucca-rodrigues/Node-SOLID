import { Router } from "express";
import { usersController } from "./useCases/users";
const router = Router();

router.get("/", (req, res) => res.send({ status: "API Ok" }));
router.get("/users", (request, response) => {
  return usersController.getAll(request, response);
});
export { router };
