import { Router } from "express";
const healthCheck = Router();

healthCheck.get("/health", (req, res) => res.send({ status: "API Ok" }));
export { healthCheck };
