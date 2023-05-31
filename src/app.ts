import "reflect-metadata";
import express, { Application } from "express";
import { handleErrors } from "./error";
import urlRoutes from "./routes/url.routes";

const app: Application = express();
app.use(express.json());
app.use(handleErrors);
app.use("", urlRoutes);

export default app;
