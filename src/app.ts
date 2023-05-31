import "reflect-metadata";
import express, { Application } from "express";
import { handleErrors } from "./error";
import urlRoutes from "./routes/url.routes";
import path from "path";

const app: Application = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(handleErrors);
app.use("", urlRoutes);
export default app;
