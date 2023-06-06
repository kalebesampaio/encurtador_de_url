import { Repository } from "typeorm";
import { Url } from "../entities/url.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const retrieveUrlService = async (code: string) => {
  const urlRepository: Repository<Url> = AppDataSource.getRepository(Url);

  const url: Url | null = await urlRepository.findOne({
    where: {
      code,
    },
  });

  if (!url) {
    throw new AppError("Url not found", 404);
  }

  await urlRepository.save(url);

  return url;
};

export default retrieveUrlService;
