import dotenv from "dotenv";

dotenv.config();

export const { PORT, APP_VERSION, APP_ENVIRONMENT, APP_NAME } = process.env;
