import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Url } from "../entities/url.entity";

export const createUrlService = async (link: string) => {
  const urlRepository: Repository<Url> = AppDataSource.getRepository(Url);
  let code = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  const urlObj = {
    code: code,
    link: link,
    hits: 0,
  };
  const newUrl: Url = urlRepository.create(urlObj);
  await urlRepository.save(newUrl);
  const newLink = `http://localhost:3000/${code}`;

  return newLink;
};
