import { Router } from "express";
import {
  createUrlController,
  retrieveUrlController,
} from "../controllers/url.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { urlSchemaRequest } from "../schemas/urls.schemas";

const urlRoutes: Router = Router();

urlRoutes.post(
  "/url",
  ensureDataIsValidMiddleware(urlSchemaRequest),
  createUrlController
);
urlRoutes.get("/:code", retrieveUrlController);

export default urlRoutes;
