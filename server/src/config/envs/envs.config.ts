import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(),
    PUBLIC_PATH: get("PUBLIC_PATH").required().asString(),
    DATABASE_URL: get("DATABASE_URL").required().asString(),
}