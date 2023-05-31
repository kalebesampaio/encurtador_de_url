import { z } from "zod";

const urlSchema = z.object({
  id: z.number(),
  code: z.string(),
  link: z.string(),
  hits: z.number(),
  createdAt: z.string(),
  updateAt: z.string(),
});

const urlSchemaRequest = urlSchema.omit({
  createdAt: true,
  updateAt: true,
  id: true,
  hits: true,
  code: true,
});
export { urlSchema, urlSchemaRequest };
