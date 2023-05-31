import { Repository } from "typeorm";
import { Url } from "../entities/url.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const accessUrlService = async (code: string) => {
  const urlRepository: Repository<Url> = AppDataSource.getRepository(Url);
  const url: Url | null = await urlRepository.findOne({
    where: {
      code,
    },
  });

  if (!url) {
    throw new AppError("Url not found", 404);
  }
  url.hits++;
  await urlRepository.save(url);

  return url.link;
};

export default accessUrlService;
