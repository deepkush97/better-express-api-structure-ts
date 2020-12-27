import {
  Express,
  json as expressJson,
  static as expressStatic,
  urlencoded as expressUrlencoded,
} from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { GetSuccessResponse } from "../helpers";
import routes from "../routes";
import {
  NotFoundExceptionMiddleware,
  ExceptionMiddleware,
} from "../middlewares";
import { CODE_FOLDER, COOKIE_SECRET } from "../constants/environment";
import ExpressBouncerMiddleware from "./ExpressBouncerMiddleware";

export default (app: Express) => {
  app.use(cors());
  app.use(helmet());
  app.use(expressJson());
  app.use(ExpressBouncerMiddleware);
  app.use(expressUrlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cookieParser(COOKIE_SECRET));
  app.use(expressStatic(`./${CODE_FOLDER}/public`));
  app.get("/test", (req, res) => {
    res.send(GetSuccessResponse("Hi, Test is successful"));
  });
  app.use("/", routes());
  app.use(NotFoundExceptionMiddleware);
  app.use(ExceptionMiddleware);
};
