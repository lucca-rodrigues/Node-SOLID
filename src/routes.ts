import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.send({ status: "API Ok" }));
export { router };
