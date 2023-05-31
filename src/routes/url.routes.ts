import { Router } from "express";
import {
  createUrlController,
  homePageController,
  retrieveUrlController,
  statusPageController,
} from "../controllers/url.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { urlSchemaRequest } from "../schemas/urls.schemas";

const urlRoutes: Router = Router();

urlRoutes.get("/", homePageController);
urlRoutes.get("/favicon.ico", homePageController);
urlRoutes.post(
  "/url",
  ensureDataIsValidMiddleware(urlSchemaRequest),
  createUrlController
);
urlRoutes.post("/new", statusPageController);
urlRoutes.get("/:code", retrieveUrlController);

export default urlRoutes;
