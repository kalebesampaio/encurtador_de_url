import { z } from "zod";
import { urlSchema, urlSchemaRequest } from "../schemas/urls.schemas";

type TUrlRequest = z.infer<typeof urlSchemaRequest>;
type TUrl = z.infer<typeof urlSchema>;

export { TUrl, TUrlRequest };
