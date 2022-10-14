import express from "express";
import { healthCheck } from "./healthCheck";
import { userRoutes } from "./users/routes";
const app = express();
app.use(express.json());
app.use(healthCheck);
app.use(userRoutes);

export default app;
