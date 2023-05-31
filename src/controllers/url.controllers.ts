import { Request, Response } from "express";
import { createUrlService } from "../services/createUrl.service";
import retrieveUrlService from "../services/retrieveUrl.service";
import accessUrlService from "../services/acessUrl.service";

export const createUrlController = async (req: Request, res: Response) => {
  const link = req.body.link;
  const code = req.body.code;

  let newLink;

  code
    ? (newLink = await createUrlService(link, code))
    : (newLink = await createUrlService(link));

  res.render("status", newLink);
};

export const retrieveUrlController = async (req: Request, res: Response) => {
  const code = req.params.code;

  const link = await retrieveUrlService(code);

  res.render("status", link);
};
export const accessUrlController = async (req: Request, res: Response) => {
  const code = req.params.code;

  const link = await accessUrlService(code);

  return res.redirect(link);
};

export const homePageController = (req: Request, res: Response) => {
  res.render("index", { title: "Encurtador URL" });
};

export const statusPageController = (req: Request, res: Response) => {
  const link = req.body.link;
  const code = req.body.code;

  res.send(req.body);
};
