import dotenv from "dotenv";

dotenv.config();

export const {
  PORT,
  APP_VERSION,
  APP_ENVIRONMENT,
  APP_NAME,
  COOKIE_SECRET,
} = process.env;

export const CODE_FOLDER = APP_ENVIRONMENT === "development" ? "src" : "dist";
export const CODE_FILES_EXTENSION =
  APP_ENVIRONMENT === "development" ? "ts" : "js";
export const ROUTE_WILDCARD = `./${CODE_FOLDER}/routes/**/*.${CODE_FILES_EXTENSION}`;
