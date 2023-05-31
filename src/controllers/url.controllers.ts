import { Request, Response } from "express";
import { createUrlService } from "../services/createUrl.service";
import retrieveUrlService from "../services/retrieveUrl.service";

export const createUrlController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const link = req.body.link;
  const code = req.body.code;

  let newLink;

  code
    ? (newLink = await createUrlService(link, code))
    : (newLink = await createUrlService(link));

  return res.status(201).json({ link: newLink });
};

export const retrieveUrlController = async (req: Request, res: Response) => {
  const code = req.params.code;

  const link = await retrieveUrlService(code);

  return res.redirect(link);
};
