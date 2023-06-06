import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Url } from "../entities/url.entity";
import { AppError } from "../errors";

export const createUrlService = async (link: string, customUrl?: string) => {
  const urlRepository: Repository<Url> = AppDataSource.getRepository(Url);
  let code = "";
  customUrl ? (code = customUrl) : (code = randomUrl());
  const uniqCode: Url | null = await urlRepository.findOne({
    where: {
      code,
    },
  });
  if (uniqCode) {
    throw new AppError("Code already exists", 409);
  }

  const urlObj = {
    code: code,
    link: link,
    hits: 0,
  };

  const newUrl: Url = urlRepository.create(urlObj);
  await urlRepository.save(newUrl);

  return newUrl;
};

const randomUrl = () => {
  let random = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    random += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return random;
};
