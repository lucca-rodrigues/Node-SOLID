import express from "express";
import { router } from "./routes";
import { userRoutes } from "./users/routes";
const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(router);

export { app };
